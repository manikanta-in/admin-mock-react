import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "maxThumbnails", "hideExcessThumbnails", "disableMobile"];
import * as React from 'react';
import classNames from 'classnames';
import FormGroup from '../FormGroup';
import { ThemeContext } from '../ThemeProvider';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import { GalleryContext } from './GalleryProvider';
import GalleryThumbnail from './GalleryThumbnail';
import GalleryThumbnailGroupWrapper from './styles/GalleryThumbnailGroupWrapper';

/**
 * Backyard React Product Gallery Thumbnail Group
 *
 * This component automatically rendered a group of thumbnails that are provided by the `GalleryProvider`
 * Can be placed anywhere within `GalleryProvider` to provide custom layout
 *
 * Example:
 * ```
 *  <GalleryProvider
 *      items={[
 *          {
 *              original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
 *          },
 *          {
 *              original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
 *          }
 *      ]}
 *  >
 *      <Grid.Row>
 *          <Grid.Column
 *              style={{
 *                  width: '6rem'
 *              }}
 *          >
 *              <GalleryThumbnailGroup
 *                  disableMobile
 *                  maxThumbnails={20}
 *                  direction="column"
 *                  style={{ maxHeight: '32rem' }}
 *              />
 *          </Grid.Column>
 *          <Grid.Column />
 *          <Grid.Column sm={8}>
 *              <GalleryViewport />
 *          </Grid.Column>
 *      </Grid.Row>
 *  </GalleryProvider>
 * ```
 */
var GalleryThumbnailGroup = /*#__PURE__*/React.forwardRef(function GalleryThumbnailGroup(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$maxThumbnails = _ref.maxThumbnails,
      maxThumbnailsProp = _ref$maxThumbnails === void 0 ? 5 : _ref$maxThumbnails,
      _ref$hideExcessThumbn = _ref.hideExcessThumbnails,
      hideExcessThumbnails = _ref$hideExcessThumbn === void 0 ? false : _ref$hideExcessThumbn,
      _ref$disableMobile = _ref.disableMobile,
      disableMobile = _ref$disableMobile === void 0 ? false : _ref$disableMobile,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get the theme context
  var theme = React.useContext(ThemeContext); // Store the forwarded ref

  var innerRef = useForwardedRef(ref); // Get the Gallery context from `GalleryProvider`

  var _React$useContext = React.useContext(GalleryContext),
      items = _React$useContext.items,
      maxThumbnailsContext = _React$useContext.maxThumbnails,
      excessRender = _React$useContext.excessRender; // State of the maximum number of thumbnails to be rendered
  // Provided by `GalleryProvider` before using defined prop


  var _React$useState = React.useState(maxThumbnailsContext || maxThumbnailsProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      maxThumbnails = _React$useState2[0],
      setMaxThumbnails = _React$useState2[1]; // Side effect to update `maxThumbnails` if it changes externally


  React.useEffect(function () {
    if (maxThumbnails !== maxThumbnailsProp) {
      setMaxThumbnails(maxThumbnailsProp);
    }
  }, [maxThumbnailsProp]); // Each thumbnail renders up to `maxThumbnails`
  // On mobile, all thumbnails are shown by default

  var thumbnails = items // Limit number of thumbnails
  .slice(0, // If is desktop and mobile not disabled,
  !theme.isMobile || disableMobile ? // If number of thumbnails is greater than max thumbnails,
  items.length > maxThumbnails ? // Remove last thumbnail
  maxThumbnails - 1 : // Else, render all thumbnails
  maxThumbnails : // Else, use all thumbnails
  items.length) // For each rendered thumbnail, render a `GalleryThumbnail`
  .map(function (_ref2, index) {
    var thumbnail = _ref2.thumbnail,
        thumbnailAlt = _ref2.thumbnailAlt,
        original = _ref2.original,
        renderThumbnail = _ref2.renderThumbnail,
        thumbnailProps = _ref2.thumbnailProps;
    return /*#__PURE__*/React.createElement(GalleryThumbnail, _extends({
      key: index,
      variant: theme.isMobile && !disableMobile ? 'dot' : 'image',
      src: thumbnail || original,
      alt: thumbnailAlt,
      item: index,
      renderThumbnail: renderThumbnail
    }, thumbnailProps));
  }); // If not hiding excess thumbnails, and
  // total number of thumbnails is greater than rendered number, and
  // desktop view, and
  // mobile view not disabled

  if (!hideExcessThumbnails && items.length > thumbnails.length && (!theme.isMobile || disableMobile)) {
    // Push excess thumbnail to rendered group
    thumbnails.push( /*#__PURE__*/React.createElement(GalleryThumbnail, {
      key: thumbnails.length,
      variant: "excess",
      item: thumbnails.length,
      excessRender: excessRender,
      maxThumbnails: maxThumbnails
    }));
  }
  /**
   * Layout:
   *  <div wrapper formgroup>
   *      ...
   *  </div>
   */


  return /*#__PURE__*/React.createElement(GalleryThumbnailGroupWrapper, null, /*#__PURE__*/React.createElement(FormGroup, _extends({
    className: classNames('gallery-thumbnail-group', theme.isMobile ? 'mobile' : 'desktop', className),
    direction: "row"
  }, props, {
    ref: innerRef
  }), thumbnails));
});
GalleryThumbnailGroup.bdsName = 'GalleryThumbnailGroup';
export { GalleryThumbnailGroup };
export default GalleryThumbnailGroup;
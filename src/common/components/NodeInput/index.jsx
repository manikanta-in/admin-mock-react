import React, { useState, useEffect } from 'react';
import { Spinner } from '@backyard/react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Address from '../Input/Address/Address';
import SourcingLevers from '../Input/SourcingLevers';
import NodeDetails from '../Input/NodeDetails';
import Card from '../Input/Card';
import { getNodeTypeDetails, getNodeSubTypeDetails, getDefaultNodeSourcingRules } from '../../services';
import { getDefaultNewNodeValues } from '../../services/getDefaultNewNodeValues';
import SaveNodeSubmit from '../Submit';

const useStyle = makeStyles({
	top: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	btnPos: {
		display: 'flex',
		float: 'right'
	}
});

const NodeInput = () => {
	const classes = useStyle();
	const disPatch = useDispatch();
	const {
		node, latitude, longitude, address, zipcode, city, state, countryCode,
		nodeType = {} , nodeSubType = {},
		supportedCarriersrvcLvl = []
	} = useSelector((s) => s.nodeDetailsSearch.data);

	const {
		dataUpdated, isRequest, sourcingRules
	} = useSelector((s) => s.nodeDetailsSearch);

	const nodeFormData = useSelector((s) => {
		return s.nodeFormData;
	}); 


	const { nodeTypeList = [] } = useSelector((s) => {
		return {
			nodeTypeList: s.nodeTypeDetails.data.map(detail => {
				return {
					value: detail.nodeTypeCode,
					label: detail.shortDescription
				}
			})
		}
	}); 
	const { nodeSubTypeList = [] } = useSelector((s) => {
		if (s.nodeTypeDetails && s.nodeTypeDetails.nodeSubTypeInfo && s.nodeTypeDetails.nodeSubTypeInfo.length) {
			return {
				nodeSubTypeList: s.nodeTypeDetails.nodeSubTypeInfo.map(detail => {
					return {
						value: detail.nodeSubTypeCode,
						label: detail.shortDescription
					}
				})
			}
		}
		return {nodeSubTypeList:[]};
	});

	// eslint-disable-next-line no-empty-pattern
	const {  workingDays = [], nodeHoliday= [] } = useSelector((s) => {
		if (s.nodeDefaultValues) {
			return s.nodeDefaultValues.data
		}
		return { workingDays:  []};
	});

	
	// Address
	const [latitudeState, setLatitudeState] = useState('');
	const [nodeState, setNodeState] = useState('');
	const [longitudeState, setLongitudeState] = useState('');
	const [addressState, setAddressState] = useState('');
	const [cityState, setCityState] = useState('');
	const [zipCodeState, setZipCodeState] = useState('');
	const [stateCodeState, setStateCodeState] = useState('');
	const [countryCodeState, setCountryCodeState] = useState('');

	// Node Details
	const [nodeTypeState, setNodeTypeState] = useState({});
	const [nodeSubtypeState, setNodeSubTypeState] = useState({});

	// Holidays
	const [dates, setDates] = useState([]);

	useEffect(() => {
		disPatch(getNodeTypeDetails());
		disPatch(getNodeSubTypeDetails());
		disPatch(getDefaultNodeSourcingRules());
		disPatch(getDefaultNewNodeValues());
	}, []);

	useEffect(() => {
		setNodeState(node);
		setLatitudeState(latitude);
		setLongitudeState(longitude);
		setAddressState(address);
		setCityState(city);
		setZipCodeState(zipcode);
		setStateCodeState(state);
		setCountryCodeState(countryCode);
		nodeFormData.nodeMaster.nodeType = nodeType;
		nodeFormData.nodeMaster.nodeSubType = nodeSubType;

		setNodeTypeState({ value: nodeType.nodeTypeCode,
			label: nodeType.shortDescription});
		setNodeSubTypeState({ value: nodeSubType.nodeSubTypeCode,
			label: nodeSubType.shortDescription});
		if (dates.length < 8) {
			const arr = dates.concat(nodeHoliday);
			setDates(arr);
		} else {
			setDates(nodeHoliday);
		}
	}, [latitude]);

	
	const handleLatitude = (e) => {
		setLatitudeState(e.target.value);
		const editedData = dataUpdated;
		editedData.latitude = e.target.value;
		disPatch({ type: 'NODE_DATA_UPDATE', dataUpdated: editedData });
	};

	const handleNode = (e) => {
		setNodeState(e.target.value);
	};

	const handleLongitude = (e) => {
		setLongitudeState(e.target.value);
		nodeFormData.nodeMaster.longitude = e.target.value;
		disPatch({ type: 'NODE_DATA_UPDATE', nodeFormData });
	};

	const handleAddress = (e) => {
		setAddressState(e.target.value);
		nodeFormData.nodeMaster.address = e.target.value;
		disPatch({ type: 'NODE_DATA_UPDATE', nodeFormData });
	};

	const handleCity = (e) => {
		setCityState(e.target.value);
		nodeFormData.nodeMaster.city = e.target.value;
		disPatch({ type: 'NODE_DATA_UPDATE', nodeFormData });
	};

	const handleZipCode = (e) => {
		setZipCodeState(e.target.value);
		nodeFormData.nodeMaster.zipcode = e.target.value;
		disPatch({ type: 'NODE_DATA_UPDATE', nodeFormData });
	};

	const handleStateCode = (e) => {
		setStateCodeState(e.target.value);
		nodeFormData.nodeMaster.stateCode = e.target.value;
		disPatch({ type: 'NODE_DATA_UPDATE', nodeFormData });
	};

	const handleCountryCode = (e) => {
		setCountryCodeState(e.target.value);
		nodeFormData.nodeMaster.countryCode = e.target.value;
		disPatch({ type: 'NODE_DATA_UPDATE', nodeFormData });
	};

	const handleNodeTypeState = (e) => {
		const nodeType = nodeTypeList.find(subType => subType.value === e.target.value);
		nodeFormData.nodeMaster.nodeType = nodeType;
		setNodeTypeState(nodeType)
		disPatch({ type: 'NODE_DATA_UPDATE', nodeFormData });
	};

	const handleNodeSubTypeState = (e) => {
		const nodeSubType = nodeSubTypeList.find(subType => subType.value === e.target.value);
		nodeFormData.nodeMaster.nodeSubType = nodeSubType;
		setNodeSubTypeState(nodeSubType)
		disPatch({ type: 'NODE_DATA_UPDATE', nodeFormData });
	};

	return (
		<div>
			{isRequest && <Spinner show invisible />}
			<div className={classes.top}>
				<Address
					node={nodeState}
					latitude={latitudeState}
					longitude={longitudeState}
					address={addressState}
					zipcode={zipCodeState}
					city={cityState}
					stateCode={stateCodeState}
					countryCode={countryCodeState}
					handleLatitude={handleLatitude}
					handleNode={handleNode}
					handleLongitude={handleLongitude}
					handleAddress={handleAddress}
					handleCity={handleCity}
					handleZipCode={handleZipCode}
					handleStateCode={handleStateCode}
					handleCountryCode={handleCountryCode}
				/>
				<SourcingLevers shortDescription={nodeTypeState} />
			</div>
			<div className={classes.top}>
				<NodeDetails
					nodeType={nodeTypeState}
					nodeSubType={nodeSubtypeState}
					handleNodeTypeState={handleNodeTypeState}
					handleNodeSubTypeState={handleNodeSubTypeState}
					nodeTypeList={nodeTypeList}
					nodeSubTypeList={nodeSubTypeList}
				/>
				<Card
					workingDays={workingDays}
					// nodeHoliday={ nodeHoliday }
					nodeHoliday={dates}
					setDates={setDates}
					srvcLvl={supportedCarriersrvcLvl}
				/>
			</div>
			<div className={classes.btnPos}>
				<SaveNodeSubmit nodeState={nodeState} />
			</div>

		</div>
	);
};

export default NodeInput;
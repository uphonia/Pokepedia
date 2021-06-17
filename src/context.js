import React, {useState, useContext} from 'react'

const AppContext = React.createContext()
const url = "https://pokeapi.co/api/v2/"

const AppProvider = ({children}) => {
	const [searchTerm, setSearchTerm] = useState("");

	// page navigation states // done
	const [pageNum, setPageNum] = useState(1);
	const [maxPageNum, setMaxPageNum] = useState(Math.ceil(898/15));

	const [idList, setIdList] = useState([...new Array(899).keys()].slice(1))
	const [startFetchID, setStartFetchID] = useState(1);

	const [maxPageNumOnPage, setMaxPageNumOnPage] = useState(15);

	// done
	const [numSet, setNumSet] = useState(1);
	const [maxSets, setMaxSets] = useState(Math.ceil(898/225));

	const capitilize = (str) => {
		return str[0].toUpperCase() + str.slice(1);
	}

	return (
		<AppContext.Provider value={{
			setSearchTerm, capitilize, pageNum, setPageNum, numSet, setNumSet, maxSets, setMaxSets, maxPageNumOnPage, setMaxPageNumOnPage, idList, setIdList, startFetchID, setStartFetchID, setMaxPageNum, maxPageNum
		}}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export {AppContext, AppProvider}

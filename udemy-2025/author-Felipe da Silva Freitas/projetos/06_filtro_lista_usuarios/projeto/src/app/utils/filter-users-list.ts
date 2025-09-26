import { isWithinInterval } from "date-fns/isWithinInterval";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOpions } from "../interfaces/user/filter-options.interface";

  
export const filterUsersList = (filterOpions: IFilterOpions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];
    filteredList = filterUsersListByName(filterOpions.name, usersList);

    filteredList = filterUsersListByStatus(filterOpions.status, filteredList);

    filteredList = filterUsersListByDate(filterOpions.startDate, filterOpions.endDate, filteredList);

    return filteredList;
 }

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
     const NAME_NOT_TYPPED = name === undefined;

     // Se o nome for undefined, se nao houver nada no nome...
     if(NAME_NOT_TYPPED){
      return usersList;
     }

     //Logica de filtro
     const filteredList = usersList.filter((user)=> user.nome.toLowerCase().includes(name.toLowerCase()));

    //  console.log(filteredList);
     return filteredList;
  }

 const filterUsersListByStatus = (status: boolean | undefined, usersList:IUser[]):IUser[] =>{
    const STATUS_NOT_SELECTED = status === undefined;

    if(STATUS_NOT_SELECTED){
      return usersList;
    }

    const filteredList = usersList.filter((user)=>user.ativo === status);
    return filteredList;
  
  }

  const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] =>{
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if(DATES_NOT_SELECTED){
     return usersList;
    }

   //  const checkDateInterval

    const listFiltered = usersList.filter((user)=> isWithinInterval(new Date(user.dataCadastro),{
     start:startDate,
     end:endDate
    }));

    return listFiltered;


 }


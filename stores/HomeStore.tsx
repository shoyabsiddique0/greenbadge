import {Store} from 'pullstate';
import Activity from '../utils/activity';

const initialState: Activity[] = [];

const activityStore = new Store<Activity[]>(initialState);
export default activityStore;

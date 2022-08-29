import { orderDataUp, orderDataDown} from '../src/data.js';

describe('descending order data', () => {
  it('function orderDataUp', () => {
    let nameAthletes = [{"name": "Zhu Ting" , "team": "China", "sport": "Volleyball"},{"name": "Kelly Catlin" , "team": "United States", "sport": "Cycling"},{"name": "Abbey Weitzeil" , "team": "United States", "sport": "Swimming"}];
    const result = [{"name": "Abbey Weitzeil" , "team": "United States", "sport": "Swimming"},{"name": "Kelly Catlin" , "team": "United States", "sport": "Cycling"},{"name": "Zhu Ting" , "team": "China", "sport": "Volleyball"}]; 
    let order = orderDataUp(nameAthletes)
    expect(order).toStrictEqual(result);
  });
}); 

describe('ascending order data', () => {
  it('function orderDataDown', () => {
    let nameAthletes = [{"name": "Abbey Weitzeil" , "team": "United States", "sport": "Swimming"},{"name": "Kelly Catlin" , "team": "United States", "sport": "Cycling"},{"name": "Zhu Ting" , "team": "China", "sport": "Volleyball"}];
    const result = [{"name": "Zhu Ting" , "team": "China", "sport": "Volleyball"},{"name": "Kelly Catlin" , "team": "United States", "sport": "Cycling"},{"name": "Abbey Weitzeil" , "team": "United States", "sport": "Swimming"}]; 
    let order = orderDataDown(nameAthletes)
    expect(order).toStrictEqual(result);
  });
}); 
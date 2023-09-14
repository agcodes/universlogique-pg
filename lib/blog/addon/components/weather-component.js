import Component from "@glimmer/component";
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class WeatherComponent extends Component {
	@tracked temperature = 5;
	@action refresh(){
		this.updateTemperature(Math.round(6+Math.random()*6));
	} 
	@action updateTemperature(value){
		this.temperature = value;
	}
}
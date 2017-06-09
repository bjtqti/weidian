"use strict";
import './css/address.css';
import '../common/js/flexible.js';
import Vue from 'vue';
import mock from './user.mock.js';
import UI from '../common/js/dialog.js';
//import _ from 'lodash';

document.addEventListener('DOMContentLoaded', function() {
	bootstrap();
}, false);

function bootstrap() {
	var app = new Vue({
		el: '#app',
		data: {
			addressList: mock.address
		},
		methods: {
			handleEdit: function(index) {
				var id = this.addressList[index].id;
				console.log(id, index)
			},
			handleDel: function(index) {
				var vm = this;
				var d = new UI.Dialog('确定删除该宝贝吗？', {
					onConfrim: function() {
						vm.addressList.splice(index, 1);
					}
				});
			},
			handleDefault: function(index) {
				for (var i = 0; i < this.addressList.length; i++) {
					if (this.addressList[i].isDefault) {
						this.addressList[i].isDefault = false;
					}
				}
				this.addressList[index].isDefault = !this.addressList[index].isDefault;
			}
		}
	});
}
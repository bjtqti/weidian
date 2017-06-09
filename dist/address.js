webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_address_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_address_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_address_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_js_flexible_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_js_flexible_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_js_flexible_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_mock_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_mock_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__user_mock_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_js_dialog_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_js_dialog_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__common_js_dialog_js__);






//import _ from 'lodash';

document.addEventListener('DOMContentLoaded', function() {
	bootstrap();
}, false);

function bootstrap() {
	var app = new __WEBPACK_IMPORTED_MODULE_2_vue__["default"]({
		el: '#app',
		data: {
			addressList: __WEBPACK_IMPORTED_MODULE_3__user_mock_js___default.a.address
		},
		methods: {
			handleEdit: function(index) {
				var id = this.addressList[index].id;
				console.log(id, index)
			},
			handleDel: function(index) {
				var vm = this;
				var d = new __WEBPACK_IMPORTED_MODULE_4__common_js_dialog_js___default.a.Dialog('确定删除该宝贝吗？', {
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var address = [{
	id: '111',
	name: '蛙哥',
	phone: '13407001300',
	isDefault: true,
	address: '湖南省-长沙市-芙蓉区 五一大道与长岛路交汇处人瑞潇湘国际1928'
}, {
	id: '222',
	name: '飞哥',
	phone: '13407001311',
	isDefault: false,
	address: '湖南省-长沙市-芙蓉区 五一大道与长岛路交汇处人瑞潇湘国际2718'
}, {
	id: '333',
	name: '李哥',
	phone: '13407001300',
	isDefault: false,
	address: '湖南省-长沙市-芙蓉区 五一大道与长岛路交汇处人瑞潇湘国际1928'
}];

exports.address = address;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * 对话框
 * @param message 消息内容
 * @param [options] 可选的配置信息
 */

function Dialog(message,options){
	var _default = {
	    confirmText:"确定",
	    cancelText:"取消",
	    onlyConfirm:false,
	    closeIcon:false,
	    onConfrim:function(){}
	};
	options = options || {};
	for(var i in _default){
		if(options[i]!== undefined){
			this[i] = options[i];
		}else{
			this[i] = _default[i];
		}
	}
	this.createNode(message);
}

Dialog.prototype.handleEvent = function(e){
	var target = e.target;
	var button = target.innerHTML;
	var event = target.getAttribute('data-event');
	e.preventDefault();

	if(event ==='n'){
		this.onClose();
		return;
	}
	if(event==='y'){
		this.onConfrim();
		this.onClose();
		return false;
	}
}

Dialog.prototype.createNode = function(message){
	var container = document.createElement('div');
	container.setAttribute('class','dialog-container');
	var html = '<div class="dialog">'+
					'<div class="dialog-head">'+
						(this.closeIcon?'<i data-event="n">x</i>':'')+
					'</div>'+
					'<div class="dialog-content">'+message+'</div>'+
					'<div class="dialog-btns">'+
						(this.onlyConfirm ? '<button data-event="y" class="only">'+this.confirmText+'</button>':
						'<button data-event="n" >'+this.cancelText+'</button>'+
						'<button data-event="y" >'+this.confirmText+'</button>')+
					'</div>'+
				'</div>';
	container.innerHTML = html;
	container.addEventListener('click',this,false);
	this.container = container;
	document.body.appendChild(container);
	setTimeout(function(){
		container.classList.add('active');
	},50)
}

Dialog.prototype.onClose = function(e){
	this.container.removeEventListener('click',this,false);
	document.body.removeChild(this.container);
}


//-----------
Dialog.tips = function(message,sec){
	var container = document.createElement('div');
	container.setAttribute('class','tips-wrap');
	container.innerHTML = '<span class="text">'+message+'</span>';
	document.body.appendChild(container);
	setTimeout(function(){
		document.body.removeChild(container);
	},sec||3000);
}

exports.Dialog = Dialog;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

;(function(win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});
    
    if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例');
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));    
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));    
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }

    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }

})(window, window['lib'] || (window['lib'] = {}));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
],[8]);
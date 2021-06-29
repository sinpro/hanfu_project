import Vue from 'vue';
import track from 'common/track';

// 注册一个全局自定义埋点指令 `v-track`
Vue.directive('track', {
    bind: (el, binding, vnode) => {
      if (binding.value) {
        //如果是浏览类型，直接保存
        /*if (binding.value.triggerType == 'browse'){
            //调用后台接口保存数据
            //api.eventTrack.saveEventTrack(params);
            console.log(params,this.$trackHandler,1111)
        } else if (binding.value.triggerType == 'click'){
          //如果是click类型，监听click事件
          el.addEventListener('click', (event) => {
            //调用后台接口保存数据
            console.log(params,trackHandler,2222)
            // api.eventTrack.saveEventTrack(params);
          }, false)
        }*/
        el.addEventListener('click', (event) => {
            track(binding.value,event)
        }, false)
      }
    }
})

//注册拖拽移动
Vue.directive('drag', {
  inserted(el, binding, vNode) {
    el.setAttribute('style', 'position: fixed; z-index: 9999');
  },
  bind(el, bindding, vNode) {
    el.setAttribute('draggable', true);
    let left; let top; let width; let
      height;
    el._dragstart = function a1(event) {
      event.stopPropagation();
      left = event.clientX - el.offsetLeft;
      top = event.clientY - el.offsetTop;
      width = el.offsetWidth;
      height = el.offsetHeight;
    };
    el._checkPosition = function a2() { // 防止被拖出边界
      width = el.offsetWidth;
      height = el.offsetHeight;
      left = Math.min(el.offsetLeft, document.body.clientWidth - width);
      left = Math.max(0, left);
      top = Math.min(el.offsetTop, document.body.clientHeight - height);
      top = Math.max(0, top);
      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
    };
    el._dragEnd = function a3(event) {
      event.stopPropagation();
      left = event.clientX - left;
      top = event.clientY - top;
      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el._checkPosition();
    };
    el._documentAllowDraop = function a4(event) {
      event.preventDefault();
    };
    document.body.addEventListener('dragover', el._documentAllowDraop);
    el.addEventListener('dragstart', el._dragstart);
    el.addEventListener('dragend', el._dragEnd);
    window.addEventListener('resize', el._checkPosition);
  },
  unbind(el, bindding, vNode) {
    document.body.removeEventListener('dragover', el._documentAllowDraop);
    el.removeEventListener('dragstart', el._dragstart);
    el.removeEventListener('dragend', el._dragEnd);
    window.removeEventListener('resize', el._checkPosition);
    delete el._documentAllowDraop;
    delete el._dragstart;
    delete el._dragEnd;
    delete el._checkPosition;
  }
});
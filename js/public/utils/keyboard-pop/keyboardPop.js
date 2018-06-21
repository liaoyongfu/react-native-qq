export default class keyboardPop {
    /**
     * 展示键盘|后面的白板
     * @param {滚动视图} scrollView 
     * @param {所编辑的元素} elementName 
     * @param {补差值} fillNum 
     */
    showKeyboard (scrollView, elementName, fillNum = 80) {
        setTimeout(() => {
            if(scrollView){
                let scrollResponder = scrollView.getScrollResponder();
                scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
                    ReactNative.findNodeHandle(elementName), fillNum, true
                );
            }
        }, 100);
    }

    /**
     * 隐藏键盘|后面的白板
     * @param {} scrollView 
     */
    hideKeyboard (scrollView) {
        if(scrollView){
            scrollView.scrollTo({ y: 0 });
        }
    }
}

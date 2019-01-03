export default {

    directives: {
        rainbow: {
            bind:(el,binding,vnode) => {
                el.style.color = '#FF440A'
            }
        }
    }

}
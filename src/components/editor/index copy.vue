<template>
    <!-- 富文本组件 -->
    <div ref="editor"></div>
</template>
<script>
    import E from 'wangeditor';
    export default {
        name: "editor",
        props: {
            getFullText: {
                // 回调函数callBack
                type: Function,
                default: () => { }
            },
            content: {
                //回显数据
                type: String,
                default: ""
            }
        }, //回调方法
        data() {
            return {};
        },
        watch: {
            content(val) {
                if (val) {
                    this.editor.txt.html(val);
                }
            }
        },
        computed: {
            editor() {
                return new E(this.$refs.editor);
            }
        },
        mounted() {
            console.info(this.editor)
            // let editor = new E(this.$refs.editor);
            this.editor.config.onchange = html => {
                this.getFullText(html); //内容赋值
            };
            this.editor.config.showLinkImg = true;
            this.editor.config.uploadImgServer =
            this.editor.config.uploadFileName = "file";
            this.editor.config.zIndex = 8;
            this.editor.config.uploadImgParams = {
                from: "editor"
            };
            //如果默认传递content值则渲染默认内容
            if (this.content) {
                this.editor.txt.html(this.content);
            }
        }
    };
</script>
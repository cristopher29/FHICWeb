<template>
    <div>
        <div class="form-group">
            <label >Título</label>
            <input type="text" class="form-control" v-bind:class="{ 'is-invalid': $v.titulo.$error }" v-model.trim="titulo" @input="$v.titulo.$touch()">
            <div class="invalid-feedback" v-if="$v.titulo.$error && !$v.titulo.required">El título es obligatorio</div>
        </div>
        <div class="form-group">
            <label >Fotos</label>
            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
        </div>
        <div class="alert alert-light" role="alert">
            <ul style="list-style: none">
                <li class="my-4">
                    <h6>Título</h6>
                    <ul>
                        <li>Corto y conciso</li>
                        <li>Céntrate en la solución</li>
                    </ul>
                </li>
                <li>
                    <h6>Fotos</h6>
                    <ul>
                        <li>Fotos en la que se vea el problema</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import { required} from 'vuelidate/lib/validators'
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        name: "Paso1",
        components:{
            vueDropzone: vue2Dropzone,
        },
        data() {
            return {
                titulo: '',
                dropzoneOptions: {
                    title: "asdas",
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 200,
                    maxFilesize: 1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "Subir imagenes",
                    dictCancelUpload: "Cancelar",
                    dictRemoveFile: "Eliminar"
                }
            }
        },
        validations: {
            titulo: {
                required
            },
            form: ['titulo']
        },
        methods: {
            validate() {
                this.$v.form.$touch();
                var isValid = !this.$v.form.$invalid
                this.$emit('on-validate', this.$data, isValid)
                return isValid
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div class="form-group">
            <label >Descripción de la petición</label>
            <textarea class="form-control" v-bind:class="{ 'is-invalid': $v.description.$error}" v-model.trim="description" @input="$v.description.$touch()"></textarea>
            <span class="invalid-feedback" v-if="$v.description.$error && !$v.description.required">La descripción es obligatoria</span>
        </div>
        <div class="form-group">
            <label>Número de votos necesarios</label>
            <select class="form-control">
                <option>1000 votos</option>
                <option>5000 votos</option>
                <option>10000 votos</option>
                <option>100000 votos</option>
            </select>
        </div>
        <div class="alert alert-light" role="alert">
            <ul style="list-style: none">
                <li class="my-4">
                    <h6>Descripción de la petición</h6>
                    <ul>
                        <li>Describe el problema</li>
                        <li>Describe una posible solución</li>
                        <li>Respeta a los demas</li>
                    </ul>
                </li>
                <li>
                    <h6>Número de votos necesarios</h6>
                    <ul>
                        <li>Marca una meta para tratar el problema</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import { required } from 'vuelidate/lib/validators'

    export default {
        name: "Paso2",
        data() {
            return {
                description: '',
                maxVotes: '',
            }
        },
        validations: {
            description: {
                required
            },
            form: ['description']
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
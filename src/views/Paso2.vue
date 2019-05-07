<template>
    <div>
        <div class="form-group">
            <label >Descripción de la petición</label>
            <textarea class="form-control" v-bind:class="{ 'is-invalid': $v.description.$error}" v-model.trim="description" @input="$v.description.$touch()"></textarea>
            <span class="invalid-feedback" v-if="$v.description.$error && !$v.description.required">La descripción es obligatoria</span>
        </div>
        <div class="form-group">
            <label>Número de votos necesarios</label>
            <input type="number" class="form-control" v-bind:class="{ 'is-invalid': $v.maxVotes.$error }" v-model.trim="maxVotes" @input="$v.maxVotes.$touch()">
            <span class="invalid-feedback" v-if="$v.maxVotes.$error && !$v.maxVotes.required">Número de votos es obligatorio</span>
            <span class="invalid-feedback" v-if="$v.maxVotes.$error && !$v.maxVotes.numeric">Número de votos tiene que ser un número</span>
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

    import { required, numeric } from 'vuelidate/lib/validators'

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
            maxVotes: {
                required,
                numeric
            },
            form: ['description', 'maxVotes']
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
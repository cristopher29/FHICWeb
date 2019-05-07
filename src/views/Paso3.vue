<template>
    <div>
        <div class="form-group">
            <label >Dirección</label>
            <gmap-autocomplete class="form-control"
                    placeholder=""
                    @place_changed="setPlace" style="border:1px solid #FFE7B8">
            </gmap-autocomplete>

            <Gmap-Map style="width: 100%; height: 300px;" :zoom="15" :center="changingCenter">
                <Gmap-Marker
                        v-if="this.place"
                        :position="{
                          lat: this.place.geometry.location.lat(),
                          lng: this.place.geometry.location.lng(),
                        }"
                ></Gmap-Marker>
            </Gmap-Map>
        </div>
        <div class="form-group">
            <label>Categoría</label>
            <div>
                <div class="button-group-pills text-center" data-toggle="buttons">
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Cultura</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Seguridad</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Transporte público</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Medio ambiente</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Servicios sociales</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Educación</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Mantenimiento</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Ocio</div>
                    </label>
                    <label class="btn btn-default">
                        <input type="checkbox" name="options" hidden>
                        <div>Servicios funerarios</div>
                    </label>
                </div>
            </div>
        </div>
        <div class="alert alert-light" role="alert" style="background: #FFE7B8">
            <ul style="list-style: none">
                <li class="my-4">
                    <h6>Dirección</h6>
                    <ul>
                        <li>Selecciona el lugar referente a la petición</li>
                    </ul>
                </li>
                <li>
                    <h6>Categoría</h6>
                    <ul>
                        <li>Selecciona una o varias categorías</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>


    export default {
        name: "Paso3",
        data() {
            return {
                address: '',
                categories: '',
                place: null,
                changingCenter: {
                    lat: 41.390205,
                    lng: 2.154007
                }
            }
        },
        validations: {
            form: ['address', 'categories']
        },
        methods: {
            setPlace(place) {
                this.place = place;
                this.changingCenter = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };
            },
            validate(){
                this.$v.form.$touch();
                return true;
            }

        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div class="form-group">
            <label >Dirección</label>
            <gmap-autocomplete class="form-control"
                    placeholder=""
                    @place_changed="setPlace">
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
                <span class="button-checkbox mr-3">
                    <button type="button" class="btn btn-primary" data-color="primary">Cultura</button>
                    <input type="checkbox" class="hidden" />
                </span>
                <span class="button-checkbox mx-3">
                    <button type="button" class="btn btn-primary" data-color="primary">Seguridad</button>
                    <input type="checkbox" class="hidden" checked />
                </span>
            </div>
        </div>
        <div class="alert alert-light" role="alert">
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
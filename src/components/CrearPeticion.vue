<!--Template HTML-->

<template>

  <form-wizard @on-complete="onComplete" title="" subtitle="" nextButtonText="Siguiente" backButtonText="Volver" finishButtonText="Finalizar" stepSize="sm">
    <tab-content title="" :before-change="()=>validateStep('Paso1')">
      <Paso1 ref="Paso1" @on-validate="mergePartialModels"></Paso1>
    </tab-content>
    <tab-content title="" :before-change="()=>validateStep('Paso2')">
      <Paso2 ref="Paso2" @on-validate="mergePartialModels"></Paso2>
    </tab-content>
    <tab-content title="" :before-change="()=>validateStep('Paso3')">
      <Paso3 ref="Paso3" @on-validate="mergePartialModels"></Paso3>
    </tab-content>
  </form-wizard>

</template>

<!--Scripts-->

<script>

import Paso1 from "./Paso1";
import Paso2 from "./Paso2";
import Paso3 from "./Paso3";

export default {
  name: 'CrearPeticion',
  components: {
    Paso1,
    Paso2,
    Paso3
  },
  data: function () {
    return {
      finalModel: {}
    }
  },
  methods:{
    onComplete: function(){
      this.$swal('Enviado', 'Tu petición ha sido enviada', 'success');
    },
    mergePartialModels(model, isValid){
      if(isValid){
        // merging each step model into the final model
        this.finalModel = Object.assign({},this.finalModel, model)
      }
    },
    validateStep(name) {
      var refToValidate = this.$refs[name];
      return refToValidate.validate();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

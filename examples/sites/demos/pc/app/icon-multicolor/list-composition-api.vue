<template>
  <div>
    <div class="svgs-wrapper">
      <div v-for="(icon, index) in MultiColorSvgs" :key="index">
        <div class="svgs-item">
          <component
            :is="icon.component"
            class="svgs-icon"
            style="width: 2em; fill: #000; height: 2em"
            @click="click(icon.name)"
          ></component>
          <span class="svgs-text">{{ icon.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MultiColorSvgsList from '@opentiny/vue-icon-multicolor'
import { TinyModal } from '@opentiny/vue'

const tinyIconMulticolor = [
  'ColorIconActivitys',
  'ColorIconAdministrativeFees',
  'ColorIconAirFares',
  'ColorIconApply',
  'ColorIconArchives',
  'ColorIconBaggageFees',
  'ColorIconCarInsurance',
  'ColorIconCarRental',
  'ColorIconCeremonyFees',
  'ColorIconConolences',
  'ColorIconEntertainmentExpense',
  'ColorIconExpertConsultationFees',
  'ColorIconExpertTeachingFees',
  'ColorIconExpressDelivery',
  'ColorIconFerryFares',
  'ColorIconFuelCost',
  'ColorIconGiftCost',
  'ColorIconHousingSubsidy',
  'ColorIconIncidentalExpenses',
  'ColorIconLandlinePhone',
  'ColorIconLineRental',
  'ColorIconLivingSubsidy',
  'ColorIconLodgingFees',
  'ColorIconMaintenanceService',
  'ColorIconMealAllowance',
  'ColorIconMealSubsidy',
  'ColorIconMeetingExpenses',
  'ColorIconNewspaperSubscription',
  'ColorIconOfficeEquipments',
  'ColorIconOfficeSupplies',
  'ColorIconOthers',
  'ColorIconPhoneBills',
  'ColorIconPhysicalExamination',
  'ColorIconPrivateVehicleAllowance',
  'ColorIconServiceCharges',
  'ColorIconTaxiFares',
  'ColorIconTrainFares',
  'ColorIconTrainingFees',
  'ColorIconTravelExpenses',
  'ColorIconVenueHospitalityFees',
  'ColorIconVenueRentalFees',
  'ColorIconVisaFees'
]

const MultiColorSvgs = Object.keys(MultiColorSvgsList).map((name) => {
  return {
    name,
    component: MultiColorSvgsList[name](),
    // 3.19.0 版本新增图标
    tinyFlag3_19: tinyIconMulticolor.includes(name)
  }
})

function click(name) {
  const input = document.createElement('input')
  input.value = name
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
  TinyModal.message({
    message: `成功复制图标名称 ${name} `,
    status: 'info'
  })
}
</script>

<style scoped>
.svgs-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
}

.svgs-icon {
  cursor: pointer;
  transition: all 0.4s;
}

.svgs-icon:hover {
  transform: scale(1.5, 1.5);
}

.svgs-item {
  width: 260px;
  text-align: center;
  display: inline-block;
  margin-bottom: 28px;
}

.svgs-text {
  padding-top: 8px;
  display: block;
  font-size: 14px;
  font-weight: 600;
}
</style>

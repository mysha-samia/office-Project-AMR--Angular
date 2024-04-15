import {GraphDataTypeModel} from "./GraphDataTypeModel";

export interface GraphResponseModel {
  diagnosticReferral: GraphDataTypeModel[],
  hospitalReferral: GraphDataTypeModel[],
  newRegisteredUsers: GraphDataTypeModel[],
  prescriptionWithProduct: GraphDataTypeModel[],
  prescribedProduct: GraphDataTypeModel[],
  screening: GraphDataTypeModel[],
  served: GraphDataTypeModel[],
  specialistReferral: GraphDataTypeModel[],
  telemedicine: GraphDataTypeModel[],
  userWithPrescription: GraphDataTypeModel[],
  userWithSymptom: GraphDataTypeModel[],
  userWithMedicineName: GraphDataTypeModel[],
  userRefuseToTakeTelemedicineButBuyMedicine: GraphDataTypeModel[],
  userTakenTelemedicine: GraphDataTypeModel[],
}

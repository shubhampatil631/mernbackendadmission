import express from "express";
import UserModel from "../modles/Student.js";
// Import UserModel schema

const router = express.Router();

export function Createstudent(req, res) {
  try {
    // Find the maximum existing ID
    const maxIdStudent = UserModel.findOne({}, {}, { sort: { id: -1 } });

    let newId = 1; // Default ID if no records exist

    if (maxIdStudent) {
      newId = maxIdStudent.id + 1; // Increment the maximum ID by one
    }

    // Create new student object with the new ID
    const newStudent = new UserModel({ id: newId, ...req.body });

    // Save to database
    newStudent.save();

    res
      .status(201)
      .json({ message: "Student created successfully", student: newStudent });
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export function getStudent(req, res) {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}
export function Newupdate(req, res) {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      SubmitedUsername: req.body.SubmitedUsername,
      SubmitedDepartment: req.body.SubmitedDepartment,
      ApplicationID: req.body.ApplicationID,
      sdate: req.body.sdate,
      Category: req.body.Category,
      ReservedCategory: req.body.ReservedCategory,
      Domicile: req.body.Domicile,
      District: req.body.District,
      NameofCandidate: req.body.NameofCandidate,
      Address: req.body.Address,
      MobileNo: req.body.MobileNo,
      FNameofCandidate: req.body.FNameofCandidate,
      Tel: req.body.Tel,
      MNameofCandidate: req.body.MNameofCandidate,
      Religion: req.body.Religion,
      Caste: req.body.Caste,
      ANameofCandidate: req.body.ANameofCandidate,
      RegistrationNo: req.body.RegistrationNo,
      MeritNo: req.body.MeritNo,
      AcademicYear: req.body.AcademicYear,
      Gender: req.body.Gender,
      sdateBirth: req.body.sdateBirth,
      sdateBirthPlace: req.body.sdateBirthPlace,
      LastSchool: req.body.LastSchool,
      School: req.body.School,
      SSCMM: req.body.SSCMM,
      SSCSM: req.body.SSCSM,
      SSCEM: req.body.SSCEM,
      HSCMM: req.body.HSCMM,
      HSCSM: req.body.HSCSM,
      HSCEM: req.body.HSCEM,
      NameofStudent: req.body.NameofStudent,
      ParentsIncome: req.body.ParentsIncome,
      MeritMarkSSC: req.body.MeritMarkSSC,
      StudentCategory: req.body.StudentCategory,
      WhetherEBC: req.body.WhetherEBC,
      HandicapType: req.body.HandicapType,
      DefenceType: req.body.DefenceType,
      HSCMCVCPassedITIPassed: req.body.HSCMCVCPassedITIPassed,
      HSCScienceHSCVocationalPassed: req.body.HSCScienceHSCVocationalPassed,
      MarksobtainedinScience: req.body.MarksobtainedinScience,
      AdmissionDate: req.body.AdmissionDate,
      TotalFee: req.body.TotalFee,
      StayinginHostel: req.body.StayinginHostel,
      Branch: req.body.Branch,
      EducationFacility: req.body.EducationFacility,
      NCC: req.body.NCC,
      TypeofCandidiate: req.body.TypeofCandidiate,
      MinorityCandidiate: req.body.MinorityCandidiate,
      EMailid: req.body.EMailid,
      Address2: req.body.Address2,
      LandLineNo: req.body.LandLineNo,
      MoNo: req.body.MoNo,
      FullNameofParent: req.body.FullNameofParent,
      FatherMotherGuardianof: req.body.FatherMotherGuardianof,
      classBranch: req.body.classBranch,
      SODOMrMiss: req.body.SODOMrMiss,
      Declaredthis: req.body.Declaredthis,
      Deponent: req.body.Deponent,
      Verifiedat: req.body.Verifiedat,
      Ldate: req.body.Ldate,
      Lfrom: req.body.Lfrom,
      Lsname: req.body.Lsname,
      Lsno: req.body.Lsno,
      Lpname: req.body.Lpname,
      Lpno: req.body.Lpno,
      Lspgname: req.body.Lspgname,
      Lspgclass: req.body.Lspgclass,
      Lspgbranch: req.body.Lspgbranch,
      Lspgcategory: req.body.Lspgcategory,

      Lpnamemarathi: req.body.Lpnamemarathi,
      Payfee: req.body.Payfee,
      LBranch: req.body.LBranch,
      LYear: req.body.LYear,
      Typeadmission: req.body.Typeadmission,

      AllotmentLetter: req.body.AllotmentLetter,
      MarksheetorZFORM: req.body.MarksheetorZFORM,
      SSCMARKSHEET: req.body.SSCMARKSHEET,
      HSCMARKSHEET: req.body.HSCMARKSHEET,
      LEAVINGCERTIFICATE: req.body.LEAVINGCERTIFICATE,
      CASTCERTIFICATE: req.body.CASTCERTIFICATE,
      NONCREMYLAYERCERTIFICATE: req.body.NONCREMYLAYERCERTIFICATE,
      GAPCERTIFICATE: req.body.GAPCERTIFICATE,
      NATIONALITYCERTIFICATE: req.body.NATIONALITYCERTIFICATE,
      DEFENCECERTIFICATE: req.body.DEFENCECERTIFICATE,
      PHYSICALHANDICAPCERTIFICATE: req.body.PHYSICALHANDICAPCERTIFICATE,
      NCCCERTIFICATE: req.body.NCCCERTIFICATE,
      DRAWINGCERTIFICATE: req.body.DRAWINGCERTIFICATE,
      DRAWINGCERTIFICATE: req.body.DRAWINGCERTIFICATE,
      INCOMECERTIFICATE: req.body.INCOMECERTIFICATE,
      INCOMECERTIFICATE: req.body.INCOMECERTIFICATE,
      IFANYDOCUMENTSREQUIRED: req.body.IFANYDOCUMENTSREQUIRED,
      Lssname: req.body.Lssname,
      Lssno: req.body.Lssno,
      Lspname: req.body.Lspname,
      Lspno: req.body.Lspno,
      Lsdate: req.body.Lsdate,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}
export function DeleteStd(req, res) {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}

export function records(req, res) {
  const { filter } = req.query;
  UserModel.find({ Branch: filter })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
}
export function Category(req, res) {
  const { categary } = req.query;
  UserModel.find({ ReservedCategory: categary })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
}

export function Alldoc(req, res) {
  UserModel.find(
    {},
    {
      ApplicationID: 1,
      NameofCandidate: 1,
      Branch: 1,
      MeritNo: 1,
      RegistrationNo: 1,
      MobileNo: 1,
      AllotmentLetter: 1,
      AllotmentLetter: 1,
      MarksheetorZFORM: 1,
      SSCMARKSHEET: 1,
      HSCMARKSHEET: 1,
      LEAVINGCERTIFICATE: 1,
      CASTCERTIFICATE: 1,
      NONCREMYLAYERCERTIFICATE: 1,
      GAPCERTIFICATE: 1,
      NATIONALITYCERTIFICATE: 1,
      DEFENCECERTIFICATE: 1,
      PHYSICALHANDICAPCERTIFICATE: 1,
      NCCCERTIFICATE: 1,
      INCOMECERTIFICATE: 1,
    }
  )
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
}
export function Docdept(req, res) {
  const { Docdeptwise } = req.query;
  UserModel.find(
    { Branch: Docdeptwise },
    {
      ApplicationID: 1,
      NameofCandidate: 1,
      Branch: 1,
      MeritNo: 1,
      RegistrationNo: 1,
      MobileNo: 1,
      AllotmentLetter: 1,
      AllotmentLetter: 1,
      MarksheetorZFORM: 1,
      SSCMARKSHEET: 1,
      HSCMARKSHEET: 1,
      LEAVINGCERTIFICATE: 1,
      CASTCERTIFICATE: 1,
      NONCREMYLAYERCERTIFICATE: 1,
      GAPCERTIFICATE: 1,
      NATIONALITYCERTIFICATE: 1,
      DEFENCECERTIFICATE: 1,
      PHYSICALHANDICAPCERTIFICATE: 1,
      NCCCERTIFICATE: 1,
      INCOMECERTIFICATE: 1,
    }
  )
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
}
export function Lastpagespicificcdoc(req, res) {
  const { document, yesnonan } = req.body;
  console.log([document], [yesnonan]);
  UserModel.find(
    { [document]: [yesnonan] },
    {
      NameofCandidate: 1,
      Branch: 1,
      MeritNo: 1,
      RegistrationNo: 1,
      Category: 1,
      MobileNo: 1,
    }
  )
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
}
export function checkboxfield(req, res) {
  const {
    YesNoNA,
    ReservedCategory,
    AllotmentLetter,
    MarksheetorZFORM,
    SSCMARKSHEET,
    HSCMARKSHEET,
    LEAVINGCERTIFICATE,
    CASTCERTIFICATE,
    NONCREMYLAYERCERTIFICATE,
    GAPCERTIFICATE,
    NATIONALITYCERTIFICATE,
    DEFENCECERTIFICATE,
    PHYSICALHANDICAPCERTIFICATE,
    NCCCERTIFICATE,
    DRAWINGCERTIFICATE,
    INCOMECERTIFICATE,
    IFANYDOCUMENTSREQUIRED,
  } = req.body;
  let query = {};
  query.ReservedCategory = ReservedCategory;
  if (AllotmentLetter === 1) {
    query.AllotmentLetter = YesNoNA;
  } else {
    delete query.AllotmentLetter;
  }
  if (CASTCERTIFICATE === 1) {
    query.CASTCERTIFICATE = YesNoNA;
  } else {
    delete query.CASTCERTIFICATE;
  } 
  if (MarksheetorZFORM === 1) {
    query.MarksheetorZFORM = YesNoNA;
  } else {
    delete query.MarksheetorZFORM;
  }
  if (SSCMARKSHEET === 1) {
    query.SSCMARKSHEET = YesNoNA;
  } else {
    delete query.SSCMARKSHEET;
  }
  if (HSCMARKSHEET === 1) {
    query.HSCMARKSHEET = YesNoNA;
  } else {
    delete query.HSCMARKSHEET;
  }
  if (LEAVINGCERTIFICATE === 1) {
    query.LEAVINGCERTIFICATE = YesNoNA;
  } else {
    delete query.LEAVINGCERTIFICATE;
  }
  if (NONCREMYLAYERCERTIFICATE === 1) {
    query.NONCREMYLAYERCERTIFICATE = YesNoNA;
  } else {
    delete query.NONCREMYLAYERCERTIFICATE;
  }
  if (GAPCERTIFICATE === 1) {
    query.GAPCERTIFICATE = YesNoNA;
  } else {
    delete query.GAPCERTIFICATE;
  }
  if (NATIONALITYCERTIFICATE === 1) {
    query.NATIONALITYCERTIFICATE = YesNoNA;
  } else {
    delete query.NATIONALITYCERTIFICATE;
  }
  if (DEFENCECERTIFICATE === 1) {
    query.DEFENCECERTIFICATE = YesNoNA;
  } else {
    delete query.DEFENCECERTIFICATE;
  }
  if (PHYSICALHANDICAPCERTIFICATE === 1) {
    query.PHYSICALHANDICAPCERTIFICATE = YesNoNA;
  } else {
    delete query.PHYSICALHANDICAPCERTIFICATE;
  }
  if (NCCCERTIFICATE === 1) {
    query.NCCCERTIFICATE = YesNoNA;
  } else {
    delete query.NCCCERTIFICATE;
  }
  if (DRAWINGCERTIFICATE === 1) {
    query.DRAWINGCERTIFICATE = YesNoNA;
  } else {
    delete query.DRAWINGCERTIFICATE;
  }
  if (INCOMECERTIFICATE === 1) {
    query.INCOMECERTIFICATE = YesNoNA;
  } else {
    delete query.INCOMECERTIFICATE;
  }
  if (IFANYDOCUMENTSREQUIRED === 1) {
    query.IFANYDOCUMENTSREQUIRED = YesNoNA;
  } else {
    delete query.IFANYDOCUMENTSREQUIRED;
  }
  console.log(query);
  if (Object.keys(query).length === 0) {
    console.log("Query object is empty, not executing the query");
  } else {
    console.log(query);
    UserModel.find(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  }
}

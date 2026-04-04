import { Gender } from "@prisma/client";
import { z } from "zod";

const createPatientValidationSchema = z.object({
  password: z.string().min(1, "Password is required"),
  patient: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    address: z.string().optional(),
  }),
});

const createAdminValidationSchema = z.object({
  password: z.string().min(1, "Password is required"),
  admin: z.object({
    name: z.string().min(1, "Name is required!"),
    email: z.string().min(1, "Email is required!").email("Invalid email"),
    contactNumber: z.string().min(1, "Contact Number is required!"),
  }),
});

const createDoctorValidationSchema = z.object({
  password: z.string().min(1, "Password is required"),
  doctor: z.object({
    name: z.string().min(1, "Name is required!"),
    email: z.string().min(1, "Email is required!").email("Invalid email"),
    contactNumber: z.string().min(1, "Contact Number is required!"),
    address: z.string().optional(),
    registrationNumber: z.string().min(1, "Reg number is required"),
    experience: z.number().optional(),
    gender: z.nativeEnum(Gender),
    appointmentFee: z.number({
      required_error: "Appointment fee is required",
    }),
    qualification: z.string().min(1, "Qualification is required"),
    currentWorkingPlace: z.string().min(1, "Current working place is required!"),
    designation: z.string().min(1, "Designation is required!"),
  }),
});

export const UserValidation = {
  createPatientValidationSchema,
  createAdminValidationSchema,
  createDoctorValidationSchema,
};
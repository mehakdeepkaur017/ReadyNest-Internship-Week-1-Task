export type BuilderContext = {
  infoSectionTitle: string;
  headerSectionTitle: string;
  defaultLabels: {
    name: string;
    rollNumber: string;
    class: string;
    section: string;
    studentId: string;
    email: string;
    phone: string;
    institutionName: string;
  };
};

export const getBuilderContext = (category: string, isQuizMode: boolean): BuilderContext => {
  if (isQuizMode) {
    return {
      infoSectionTitle: "Candidate Information",
      headerSectionTitle: "Assessment Header",
      defaultLabels: {
        name: "Candidate Name",
        rollNumber: "Roll Number",
        class: "Class / Grade",
        section: "Section / Batch",
        studentId: "Student ID",
        email: "Candidate Email",
        phone: "Candidate Phone",
        institutionName: "Institution Name"
      }
    };
  }

  switch (category) {
    case "IT & Internal Operations":
      return {
        infoSectionTitle: "Employee Information",
        headerSectionTitle: "Support Header",
        defaultLabels: {
          name: "Employee Name",
          rollNumber: "Employee ID",
          class: "Department",
          section: "Location / Office",
          studentId: "System Login ID",
          email: "Work Email",
          phone: "Work Phone",
          institutionName: "Company Name"
        }
      };
    case "HR & Recruitment":
      return {
        infoSectionTitle: "Applicant Information",
        headerSectionTitle: "Recruitment Header",
        defaultLabels: {
          name: "Applicant Name",
          rollNumber: "Application ID",
          class: "Applying For",
          section: "Experience Level",
          studentId: "Referral ID",
          email: "Personal Email",
          phone: "Contact Number",
          institutionName: "Company Name"
        }
      };
    case "Events & Registrations":
      return {
        infoSectionTitle: "Attendee Information",
        headerSectionTitle: "Event Header",
        defaultLabels: {
          name: "Attendee Name",
          rollNumber: "Ticket Number",
          class: "Ticket Type",
          section: "Organization",
          studentId: "Designation",
          email: "Email Address",
          phone: "Phone Number",
          institutionName: "Event Organizer"
        }
      };
    case "Healthcare":
      return {
        infoSectionTitle: "Patient Information",
        headerSectionTitle: "Clinic Header",
        defaultLabels: {
          name: "Patient Name",
          rollNumber: "File Number",
          class: "Age",
          section: "Gender",
          studentId: "Insurance ID",
          email: "Email Address",
          phone: "Phone Number",
          institutionName: "Clinic / Hospital Name"
        }
      };
    case "Customer Experience":
      return {
        infoSectionTitle: "Respondent Information",
        headerSectionTitle: "Brand Header",
        defaultLabels: {
          name: "Customer Name",
          rollNumber: "Order ID",
          class: "Product / Service",
          section: "Location",
          studentId: "Account ID",
          email: "Email Address",
          phone: "Phone Number",
          institutionName: "Brand Name"
        }
      };
    case "Real Estate":
      return {
        infoSectionTitle: "Inquiry Information",
        headerSectionTitle: "Property Header",
        defaultLabels: {
          name: "Client Name",
          rollNumber: "Property ID",
          class: "Property Type",
          section: "Budget Range",
          studentId: "Agent ID",
          email: "Email Address",
          phone: "Phone Number",
          institutionName: "Agency Name"
        }
      };
    case "Education":
      return {
        infoSectionTitle: "Student Information",
        headerSectionTitle: "Institution Header",
        defaultLabels: {
          name: "Student Name",
          rollNumber: "Roll Number",
          class: "Class / Course",
          section: "Section / Batch",
          studentId: "Student ID",
          email: "Email Address",
          phone: "Phone Number",
          institutionName: "Institution Name"
        }
      };
    case "Finance & Administration":
    case "Business Operations":
    default:
      return {
        infoSectionTitle: "Submitter Information",
        headerSectionTitle: "Form Header",
        defaultLabels: {
          name: "Full Name",
          rollNumber: "Reference ID",
          class: "Department",
          section: "Role",
          studentId: "Internal ID",
          email: "Email Address",
          phone: "Phone Number",
          institutionName: "Organization Name"
        }
      };
  }
};

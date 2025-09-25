import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Karguvel Portfolio';
  currentYear: number = new Date().getFullYear();

  aboutMe = {
    name: 'Karguvel Pooraja',
    currentRole: 'Senior Software Engineer at CIEL HR Services Pvt Ltd',
    intro: 'I am passionate about software development, and building impactful digital solutions.'
  };

  education = [
    {
      school: 'TDTA primary school',
      period: '2001 - 2006',
      detail: 'Class 1 - 6 in Kothalarivilai, Tuticorin'
    },
    {
      school: 'SMA Govt Hr Sec School',
      period: '2006 - 2013',
      detail: 'Class 6 - 12 in Siruthondanallur, Tuticorin'
    },
    {
      school: 'Kings Engineering College, Chennai',
      period: '2013 - 2017',
      detail: 'B.E (ECE), CGPA 7.3'
    }
  ];

  experience = [
    {
      company: 'Avalon Technologies Pvt Ltd',
      period: 'Aug 2017 - Mar 2021',
      role: 'Quality Inspector',
      detail: 'PCB board manufacturing company (MEPZ, Tambaram Sanatorium)'
    },
    {
      company: 'Redim Information Systems Pvt Ltd',
      period: 'Mar 2021 - Dec 2023',
      role: 'UI Developer',
      detail: 'Gaming development company (online casino games)'
    },
    {
      company: 'Blind Matrix',
      period: 'Dec 2023 - Mar 2024',
      role: 'Software Engineer',
      detail: 'Worked 3 months on software development projects'
    },
    {
      company: 'CIEL HR Services Pvt Ltd',
      period: 'Mar 2024 - Present',
      role: 'Senior Software Engineer',
      detail: 'Currently working as a software engineer'
    }
  ];
}

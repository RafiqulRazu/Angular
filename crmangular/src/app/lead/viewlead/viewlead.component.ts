import { Component } from '@angular/core';
import { LeadModel } from '../../model/lead.model';
import { UserModel } from '../../model/user.model';
import { ActivityModel } from '../../model/activity.model';
import { ActivatedRoute } from '@angular/router';
import { LeadService } from '../../service/lead.service';
import { UserService } from '../../service/user.service';
import { error } from 'console';

@Component({
  selector: 'app-viewlead',
  templateUrl: './viewlead.component.html',
  styleUrl: './viewlead.component.css'
})
export class ViewleadComponent {

  leads: LeadModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private leadService: LeadService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadLeads();
  }

  loadLeads() {
    this.leadService.getLeads().subscribe({
      next: res => {
        this.leads = res;
      },
      error: error => {
        console.log(error);
      }
    })
  }
}

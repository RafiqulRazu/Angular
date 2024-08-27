import { Component, OnInit } from '@angular/core';
import { Interaction } from '../../model/Interaction.model';
import { Customer } from '../../model/customer.model';
import { InteractionService } from '../../service/interaction.service';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-viewinteraction',
  templateUrl: './viewinteraction.component.html',
  styleUrl: './viewinteraction.component.css'
})
export class ViewinteractionComponent implements OnInit{

  interactions: Interaction[] = [];
  customers: Customer[] = [];

  constructor(
    private interactionService: InteractionService,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    forkJoin({
      customers: this.customerService.getCustomerForInteraction(),
      interactions: this.interactionService.viewAllInteraction()
    }).subscribe({
      next: ({ customers, interactions }) => {
        this.customers = customers;
        this.interactions = interactions;
      },
      error: err => {
        console.log(err);
      }
    });
  }


  deleteInteraction(interactionId: string): void {
    this.interactionService.deleteInteraction(interactionId).subscribe({
      next: res => {
        this.loadData(); // Refresh the list after deletion
      },
      error: err => {
        console.log(err);
      }
    });
  }

  editInteraction(interaction: Interaction): void {
    // Navigate to the edit interaction component with the interaction's ID
    this.router.navigate(['/updateinteraction', interaction.id]);
  }

}

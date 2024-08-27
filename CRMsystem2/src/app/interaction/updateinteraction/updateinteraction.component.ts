import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../../model/customer.model';
import { Interaction } from '../../model/Interaction.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { InteractionService } from '../../service/interaction.service';

@Component({
  selector: 'app-updateinteraction',
  templateUrl: './updateinteraction.component.html',
  styleUrl: './updateinteraction.component.css'
})
export class UpdateinteractionComponent {
  interactionForm!: FormGroup;
  customers: Customer[] = [];
  interactionId: string = "";
  Interaction: Interaction = new Interaction();
  interaction: Interaction= new Interaction();


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private interactionService: InteractionService
  ) { }


  ngOnInit(): void {
   

    this.interactionId= this.route.snapshot.params['id'];


   console.log(this.interactionId);

   this.interactionForm = this.formBuilder.group({
    type: [''],
    notes: [''],
    date: [''],
    customer: this.formBuilder.group({
      id: [undefined],
      name: [undefined,],
      email: [undefined],
      phone: [undefined],
      company: [undefined],
      createAt: [undefined],
      updateAt: [undefined],
      status: [undefined]
    })
  });

   this.loadCustomer();
   this.loadInteractionDetails();
 }


 loadCustomer(): void {
  this.customerService.getCustomerForInteraction().subscribe({
    next: (res: Customer[]) => {
      this.customers = res;
    },
    error: err => {
      console.log(err);
    }
  });

 }

  loadInteractionDetails(): void {
    this.interactionService.getInteractionById(this.interactionId).subscribe({
      next: (interaction: Interaction) => {
         this.interactionForm.patchValue({
          type: interaction.type,
          notes: interaction.notes,
          date: interaction.date,
          interaction: interaction.customer
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }

  updateInteraction(): void {

    const updatedInteraction: Interaction = {
      ...this.interaction,
      ...this.interactionForm.value
    };
    this.interactionService.updateInteraction(updatedInteraction).subscribe({
      next: res => {
        console.log('Student updated successfully:', res);
        this.router.navigate(['student']); // Navigate to the students list after update
      },
      error: err => {
        console.log('Error updating student:', err);
      }
    });

  }



}

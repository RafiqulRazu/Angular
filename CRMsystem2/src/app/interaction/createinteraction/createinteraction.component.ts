import { Component, OnInit } from '@angular/core';
import { Interaction } from '../../model/Interaction.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InteractionService } from '../../service/interaction.service';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../model/customer.model';

@Component({
  selector: 'app-createinteraction',
  templateUrl: './createinteraction.component.html',
  styleUrl: './createinteraction.component.css'
})
export class CreateinteractionComponent implements OnInit{

  customers: Customer[] = [];
  interactions: Interaction[] = [];
  interactionForm!: FormGroup;
  interaction: Interaction = new Interaction();


  constructor(
    private interactionService: InteractionService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private router:Router
  ){}


  ngOnInit(): void {
    
    this.loadCustomer()

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

    this.interactionForm.get('customer')?.get('name')?.valueChanges.subscribe(name => {
      const selectedCustomer = this.customers.find(cus => cus.name === name);
      if (selectedCustomer) {
        this.interactionForm.patchValue({ customer: selectedCustomer });
      }
    });
  }

  loadCustomer() {
    this.customerService.getCustomerForInteraction()
      .subscribe({
        next: res => {
          this.customers = res;
        },
        error: err => {
          console.log(err);
        }

      });

  }


  createInteraction() {

    this.interaction.type = this.interactionForm.value.type;
    this.interaction.notes = this.interactionForm.value.notes;
    this.interaction.date = this.interactionForm.value.date;
    this.interaction.customer = this.interactionForm.value.customer;


    this.interactionService.createInteraction(this.interaction)
      .subscribe({
        next: res => {
          this.loadCustomer();
          this.interactionForm.reset();
          this.router.navigate(['customer']);

        },

        error: err => {

          console.log(err);
        }

      });

  }

}

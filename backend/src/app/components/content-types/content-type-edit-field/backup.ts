import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ContentTypesService } from "../../../services/content-types.service";
import { TextboxQuestion } from "../../../models/question-textbox";
import { DropdownQuestion } from "../../../models/question-dropdown";

@Component({
  selector: 'app-content-type-edit-field',
  templateUrl: './content-type-edit-field.component.html',
  styleUrls: ['./content-type-edit-field.component.css']
})
export class ContentTypeEditFieldComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contentTypesService:ContentTypesService) { }

  fieldId: string;
  field: any;
  fields: any;

  isDataAvailable = false;
  questions = [
    new TextboxQuestion({
      key: "contentTypeId",
      label: "contentTypeId",
      value: 'this.contentTypeId',
      required: false,
      order: 1
    }),

    new TextboxQuestion({
      key: "fieldId",
      label: "fieldId",
      value: 'this.fieldId',
      required: false,
      order: 2
    }),

    new TextboxQuestion({
      key: "label",
      label: "Label",
      value: "my lable",
      required: false,
      order: 3
    }),

    new DropdownQuestion({
      key: "isRequired",
      label: "Required",
      options: [{ key: "true", value: "true" }, { key: "false", value: "false" }],
      order: 4
    }),
  ];

  ngOnInit() {
    this.contentTypesService.contentTypeSubject.subscribe(data => {
      console.log('subscrictopn complete');
      this.fields = this.contentTypesService.contentType.fields;
    });

    this.route.queryParams.subscribe(params => {
      console.log('route changed');
      if(this.fields && params['fieldId']){
        this.fieldId = params['fieldId'];
        this.populateForm(this.fieldId);
      }
    });
  }

  populateForm(fieldId){
    console.log('populateForm', fieldId);
    this.field = this.fields.filter(field => field.id === fieldId)[0];
    console.log('questions', this.questions);
    // this.questions.find(q => q.key === 'contentTypeId').value = this.contentTypesService.contentType.id;
    // this.questions.find(q => q.key === 'fieldId').value = this.field.id;
    this.questions[1].value = this.field.id;

    // this.questions.find(q => q.key === 'label').value = this.field.label;
    console.log('label value ===>', this.questions.find(q => q.key === 'label').value)
    // this.questions.find(q => q.key === 'isRequired').value = this.field.isRequired;
    this.isDataAvailable = true;
  }

onSubmitFieldEdit(payload){
  if (payload) {
    console.log("payload", payload);
    console.log("this.field", this.field);
    let self = this;
    // this.contentTypesService.updateContentTypeField(this.contentTypesService.contentType.id, payload);

  }
}

}
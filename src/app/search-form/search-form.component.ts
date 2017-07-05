import { Component, OnInit } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FirebasedbService } from '../firebaseserv/firebasedb.service';
// from https://github.com/softsimon/angular-2-dropdown-multiselect
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts   } from 'angular-2-dropdown-multiselect';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  categories : Array<any>;
  subjects : Array<any>;
  catOptions: Array<any>;
  subjOptions: Array<any>;
  selectedSubjects: Array<any>;
  selectedCategories: Array<any>;
  //platforms : Array<any>;
  public platforms : FirebaseListObservable<any>;
  
  constructor(public db: FirebasedbService) {

    db.getCategories().forEach((x) => {
      console.log(x[0]); 
      this.categories = x[0];
      console.log(this.categories[0]);
      this.catOptions = [];
      this.categories.forEach((category, index) => {
        var categoryObj = {};
        categoryObj['id'] = index+1;
        categoryObj['name'] = category;
        this.catOptions.push(categoryObj);
      });
      this.loadCategory();
    });

    db.getSubjects().forEach((x)=>{
      this.subjects = x[0];
      this.subjOptions = [];
      this.subjects.forEach((subject, index) => {
        var subjectObj = {};
        subjectObj['id'] = index+1;
        subjectObj['name'] = subject[1];
        this.subjOptions.push(subjectObj);
      });
      this.loadSubject();
      
    });

    //db.getPlatforms().forEach((x)=>{console.log(x)});
    //console.log(this.platforms)

    //db.getPlatforms();
    this.platforms = this.db.platforms;
    console.log(this.platforms)

    db.getTexts().forEach((x)=>{console.log(x)});
    //console.log(this.platforms)

  };
  
  
  categoryModel: number[];
 // Settings configuration
  categorySettings: IMultiSelectSettings = {
      checkedStyle: 'fontawesome',
      buttonClasses: 'btn btn-default btn-block',
      displayAllSelectedText: true,
      dynamicTitleMaxItems: 1,
      showCheckAll: true,
      showUncheckAll: true
  };
  
  // Text configuration
  categoryTexts: IMultiSelectTexts = {
      checkAll: 'Select all',
      uncheckAll: 'Unselect all',
      checked: 'selected',
      checkedPlural: 'categories selected',
      defaultTitle: 'Choose category(ies)',
      allSelected: 'All selected',
  };
  
  // Labels / Parents
  categoryOptions: IMultiSelectOption[] = [];
  
  
  subjectModel: number[];
  // Settings configuration
  subjectSettings: IMultiSelectSettings = {
      checkedStyle: 'fontawesome',
      buttonClasses: 'btn btn-default btn-block',
      displayAllSelectedText: true,
      dynamicTitleMaxItems: 2,
      showCheckAll: true,
      showUncheckAll: true
  };
  
  // Text configuration
  subjectTexts: IMultiSelectTexts = {
      checkAll: 'Select all',
      uncheckAll: 'Unselect all',
      checked: 'selected',
      checkedPlural: 'subjects selected',
      defaultTitle: 'Choose subject(s)',
      allSelected: 'All selected',
  };
  
  // Labels / Parents
  subjectOptions: IMultiSelectOption[] = [];

  ngOnInit() {
  }
  onChangeCategory() {
    this.selectedCategories = [];
    this.categoryModel.forEach((catModel) => {
      var categ = this.categoryOptions.filter((cat) => {
        return cat.id === catModel;
      });
      this.selectedCategories.push(categ[0].name);
    })
    
    console.log("Selected categories are: ", this.selectedCategories);
    
  }
  
  onChangeSubject() {
    this.selectedSubjects = [];
    this.subjectModel.forEach((subjModel) => {
      var subj = this.subjectOptions.filter((subj) => {
        return subj.id === subjModel;
      });
      this.selectedSubjects.push(subj[0].name);
    })
    
    console.log("Selected subjects are: ", this.selectedSubjects.join(", "));
  }
  
  
  loadCategory() {
    this.categoryOptions = this.catOptions;

  }
  loadSubject() {
    this.subjectOptions = this.subjOptions;
  }

}

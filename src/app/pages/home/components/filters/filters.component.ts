import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { StoreService } from "@app/services/store.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>()
  categories: string[] | undefined
  categoriesSubscription: Subscription | undefined

  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories().subscribe((res) => this.categories = res)
  }

  onShowCategory(category: string) {
    this.showCategory.emit(category)
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) this.categoriesSubscription.unsubscribe()
  }


}

import { Component,OnInit,Input } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';


@Component({
  selector: 'app-user-repository',
  templateUrl: './userRepos.component.html',
  styleUrls: []
})

export class UserReposComponent implements OnInit {
loadComponent = true;
  @Input() username:string;
  page = 1;
  horizontal = true;
  pageSize = 4;
  title = 'GithubUsers';
  repositories: any[] = [];
  constructor(protected reposService: RepoService) {}
  
  
  ngOnInit() {
    this.reposService.getRepositories(this.username)
    .subscribe(
      (data) => { // Success
        this.repositories = data as string [];
        console.log["resultados"+data['results']];
      },
      (error) => {
        console.error(error);
      }
    );

  }
}

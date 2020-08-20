import { Component,OnInit,Input } from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import { UserModel } from 'src/app/core/domain/user.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-repository',
  templateUrl: '../Views/userRepos.component.html',
  styleUrls: []
})

export class UserReposComponent implements OnInit {
loadComponent = true;
  @Input() user:UserModel;
  userId:number;
  page = 1;
  horizontal = true;
  pageSize = 4;
  title = 'GithubUsers';
  repositories: any[] = [];
  constructor(protected reposService: RepoService,private route:  ActivatedRoute) { }
  ngOnInit() { 
    this.route.paramMap.subscribe(params => {
      this.userId =Number(params.get("id"))
    });
      console.log(this.userId);
    this.reposService.getRepositories(this.userId).subscribe((data) => {
        this.repositories = data as string [];
        console.log["resultados"+data['results']];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

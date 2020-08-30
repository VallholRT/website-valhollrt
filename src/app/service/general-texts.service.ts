import { Injectable, VERSION } from '@angular/core';

export class ReleaseNoteVersion {
  public version: string;
  public taskFeatures: Set<Task>;
  public taskImprovements: Set<Task>;
  public taskBugs: Set<Task>;
  constructor(version: string, tnf?: Set<Task>, tni?: Set<Task>, tnb?: Set<Task>) {
    this.version = version;
    this.taskFeatures = tnf;
    this.taskImprovements = tni;
    this.taskBugs = tnb;

  }

}

export class Task {
  public commit: string;
  public title: string;
  constructor(c: string, t: string) {
    this.commit = c;
    this.title = t;
  }
}

export enum CategoryReleaseNote {
  FEATURE, IMPROVEMENTS, BUGS
}

@Injectable({
  providedIn: 'root'
})
export class GeneralTextsService {
  public VERSION: string = "Ver. 0.0.3";
  public ODIN: string = "Odin";
  public FEATURE: CategoryReleaseNote.FEATURE;
  public IMPROVEMENTS: CategoryReleaseNote.IMPROVEMENTS;
  public BUGS: CategoryReleaseNote.BUGS;
  public GITHUBTAGSLINK = "https://github.com/VallholRT/Odin/releases/tag/";

  public listReleasedNotesVersion: ReleaseNoteVersion[] = [

    new ReleaseNoteVersion(
      "v0.0.3",
      new Set<Task>()
        .add(new Task("[ODN-0001]", "Material Panel, and Edit Material in the current Tree node"))
        .add(new Task("[ODN-0003]", "SideBar and content panel widget common"))
        .add(new Task("[ODN-0007]", "Edit the names of the container in the Tree node")),
      new Set<Task>()
        .add(new Task("[ODN-0008]", "Move Console debug to the sidebar"))
        .add(new Task("[ODN-0012]", "Tree Node Added Select Container in tree node binded with the currentMeshSelected service")))

  ];
  constructor() { }

}
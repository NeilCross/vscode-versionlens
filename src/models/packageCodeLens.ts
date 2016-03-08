/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Peter Flannery. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {CodeLens, Range, Uri} from 'vscode';

export class PackageCodeLens extends CodeLens {
  uri: Uri;
  packageName: string;
  packageVersion: string;
  parent: boolean;

  constructor(range: Range, uri: Uri, packageName: string, packageVersion: string, parent: boolean) {
    super(range);
    this.uri = uri;
    this.packageName = packageName;
    this.packageVersion = packageVersion;
    this.parent = parent;
  }
}
import { DisplayMode } from "@microsoft/sp-core-library";
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { IDataService } from '../../../../models/IDataService';

export interface IImagesGalleryContainerProps {
  imageLibraryRootFolderUniqueId: string;
  rootUrl: string;
  dataService: IDataService;
  numberOfColumns: number;
  webPartTitle: string;
  showBlank: boolean;
  displayMode: DisplayMode;
  themeVariant: IReadonlyTheme | undefined;
  updateWebPartTitle: (value: string) => void;
}

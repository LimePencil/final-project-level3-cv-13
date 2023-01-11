import os
import json

def make_annotation(dataset_path,label_filename,direc_root = "/opt/ml/final-project-level3-cv-13/Data_prepare/Fish_dataset/output/new_json_set"):
    ###########annotation Part ###########
    #디렉토리 없으면 만들어 주는 코드 -> 새로운 json이 담길 폴더를 만들기
    
    
    try:
        if not os.path.exists(direc_root):
            os.makedirs(direc_root)
    except OSError:
        print("Error: Failed to create the directory.")

    anns_path = dataset_path + '/' + label_filename
    anns_name_list = os.listdir(anns_path)
    for count ,anns_folder_name in enumerate (anns_name_list): #gbt_fish_dtset1~4.json
        if anns_folder_name[-5:] != ".json":
            print(anns_folder_name," is not json")
        else:
            print("Making anns process [",count+1,"/",len(anns_name_list),"]")
            tmp_anns_path = anns_path +'/'+ anns_folder_name
            with open(tmp_anns_path, 'r') as f: # Read annotations
                anns = json.loads(f.read())
            categories = anns["categories"]
            images = anns["images"]
            annotations = anns["annotations"]

            categories_id = []
            img_file_name = []
            bbox = []

            for img in images:
                img_file_name.append(img['file_name'])
            for anno in annotations:
                categories_id.append(anno["category_id"])
                bbox.append(anno["bbox"])
            print("##################################")
            print("## Name of json file : " ,anns_folder_name)
            print("## Number of categories_id : ", len(categories_id))
            print("## Number of img_file_name : ", len(img_file_name))
            print("## Number of bbox : ", len(bbox))
            print("################################## \n")
            new_json = {}
            for idx in range (len(img_file_name)):
                new_json[idx]= {'img_file_name' : img_file_name[idx][2:], 
                                "categories_id" : categories_id[idx], 
                                "bbox" : bbox[idx]}

            with open(direc_root+'/'+'[new]_'+anns_folder_name, "w") as f:
                print("new_json file is complete to create at ",direc_root+'/'+'[new]'+anns_folder_name)
                json.dump(new_json, f, indent = 4)

    return categories
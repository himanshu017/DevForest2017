﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace DeveloperForest.Model
{
    public class ThemeModel : Base
    {
        public int ThemeId { get; set; }
        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        public int SubCategoryId { get; set; }

        public string SubCategoryName { get; set; }
        public string Title { get; set; }
        public string ImageName { get; set; }
        public string Description { get; set; }
        public string Downloadlink { get; set; }
        public string DemoLink { get; set; }

        public bool IsTrending { get; set; }

        public List<ThemeModel> ModelList { get; set; }
        public string PreImageName { get; set; }

        public string BaseURL { get;set; }

        public string FileSize { get; set; }
        public int ViewsTotal { get; set; }
        public string LastUpdate { get; set; }
        public string PublishDate { get; set; }
        public string OfficialWebsite { get; set; }
        public string License { get; set; }
        public string RelatedLink1 { get; set; }
        public string RelatedLink2 { get; set; }
        public string RelatedLink3 { get; set; }
        public string RelatedLink4 { get; set; }
        public string RelatedLink5 { get; set; }
    }
}

using CMFGlobalFundingRates.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CMFGlobalFundingRates.Controllers
{
    public class CMF_London2DataController : ApiController
    {
        private Model1Container db = new Model1Container();

        public IEnumerable<CMF_London_2> GetAllRows()
        {
            return db.CMF_London_2;
        }
    }
}

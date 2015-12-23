using CMFGlobalFundingRates.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CMFGlobalFundingRates.Controllers
{
    public class CMF_ContactsDataController : ApiController
    {
        private Model1Container db = new Model1Container();

        [Route("api/CMF_ContactsData")]
        [HttpGet]
        public IEnumerable<CMF_Contacts> GetAllRows()
        {
            return db.CMF_Contacts;
        }

        //public IEnumerable<CMF_Contacts> GetContacts(string location)
        //{
        //    return db.CMF_Contacts.Where(c => c.Location == location);
        //}

        [Route("api/CMF_ContactsData/{location}")]
        [HttpGet]
        public IEnumerable<CMF_Contacts> GetContacts(string location)
        {
            return db.CMF_Contacts.Where(c => c.Location == location);
        }
    }
}

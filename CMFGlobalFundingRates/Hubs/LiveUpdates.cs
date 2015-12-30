using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace CMFGlobalFundingRates.Hubs
{
    public class LiveUpdates : Hub
    {
        public void Send(string id, string value)
        {
            // Call the addNewMessageToPage method to update clients.
            Clients.All.addNewMessageToPage(id, value);
        }
    }
}
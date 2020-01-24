// functions to test
import * as visitsFunctions from "./visits";

// app configuration
import appConfig from "../appConfig";

// mock api requests
import MockAdapter from "axios-mock-adapter";
import * as axios from "axios";

describe("api", () => {
  describe("visits", () => {
    describe("_filtersToUri", () => {
      it("returns an empty string if no filters are passed", () => {
        expect(visitsFunctions._filtersToUri()).toBe("");
      });
      it("returns an empty string if only query_type is passed", () => {
        let filters = { query_type: "or" };
        expect(visitsFunctions._filtersToUri(filters)).toBe("");
      });
      it("returns an empty string when everything is an empty string except for query_type", () => {
        let filters = {
          ip: "",
          city: "",
          country_code: "",
          country_name: "",
          region_code: "",
          time_zone: "",
          zip_code: "",
          visit_date: "",
          query_type: "or"
        };
        expect(visitsFunctions._filtersToUri(filters)).toBe("");
      });
      it("returns query string parameters when json is passed", () => {
        expect(
          visitsFunctions._filtersToUri({
            country_code: "US",
            latitude: 35,
            query_type: "nor"
          })
        ).toBe("?country_code=US&latitude=35&query_type=nor");
      });
    });
    describe("fetchVisits", () => {
      let baseUrl = `${appConfig.visitServerEndpoint}/`;
      let mock = new MockAdapter(axios);
      it("no filters", () => {
        // return empty array on /visits request
        mock.onGet(baseUrl).reply(200, []);
        return visitsFunctions.fetchVisits().then(res => {
          // make assertions
          expect(res.success).toBe(true);
          expect(res.data).toEqual([]);
          expect(res.err).toBe(undefined);
        });
      });
      it("some filters", () => {
        // return empty array on /visits request
        let requestUrl =
          baseUrl + "?country_code=US&latitude=35&query_type=nor";
        let mockReponse = [
          {
            ip: "37.142.42.64",
            city: "Tel Aviv",
            country_code: "IL",
            country_name: "Israel",
            latitude: 32.06660079956055,
            longitude: 34.76499938964844,
            metro_code: 0,
            region_code: "TA",
            time_zone: "Asia/Jerusalem",
            zip_code: "",
            visit_date: "2018-01-25T16:48:44.192Z"
          }
        ];
        mock.onGet(requestUrl).reply(200, mockReponse);
        return visitsFunctions
          .fetchVisits({ country_code: "US", latitude: 35, query_type: "nor" })
          .then(res => {
            expect(res.success).toBe(true);
            expect(res.data).toEqual(mockReponse);
            expect(res.err).toBe(undefined);
          });
      });
      it("on passing bad parameters", () => {
        // return empty array on /visits request
        let requestUrl = baseUrl + "?latitude=sdf";
        let mockReponse = "Error parsing latitude, longitude, or metro_code";
        mock.onGet(requestUrl).reply(400, mockReponse);
        return visitsFunctions.fetchVisits({ latitude: "sdf" }).then(res => {
          expect(res.success).toBe(false);
          expect(res.data).toBe(undefined);
          expect(res.err).toBe(
            "Error parsing latitude, longitude, or metro_code"
          );
        });
      });
    });
  });
});

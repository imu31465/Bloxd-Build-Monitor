export const id = 131;
export const ids = [131];
export const modules = {
  34898: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV
    });
    var JV = xV(2645);
    const YV = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];

    function UV(VV) {
      return new Promise(((eV, xV) => {
        VV.onsuccess = () => {
          eV(VV.result)
        }, VV.onerror = () => {
          xV(VV.error)
        }
      }))
    }

    function yV(VV) {
      return new Promise(((eV, xV) => {
        VV.oncomplete = () => {
          eV()
        }, VV.onerror = () => {
          xV(VV.error)
        }, VV.onabort = () => {
          var eV;
          xV(null !== (eV = VV.error) && void 0 !== eV ? eV : new Error("IndexedDB transaction aborted"))
        }
      }))
    }

    function pV(VV) {
      return IDBKeyRange.bound([VV], [VV, []])
    }

    function QV(VV, eV) {
      return IDBKeyRange.bound([VV, eV], [VV, eV, []])
    }
    class nV {
      constructor() {
        this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
      }
      static get supported() {
        try {
          return "undefined" !== typeof indexedDB
        } catch {
          return !1
        }
      }
      putRecording(VV) {
        this.write(["recordings"], (eV => {
          eV.objectStore("recordings").put(VV)
        }))
      }
      putVideoSequence(VV, eV, xV) {
        this.write(["recordings", "videoSequences"], (JV => {
          JV.objectStore("recordings").put(VV), JV.objectStore("videoSequences").put({
            recordingId: VV.recordingId,
            segmentId: eV,
            sequence: xV
          })
        }))
      }
      appendVideo(VV, eV) {
        this.write(["videoHeaders", "videoChunks"], (xV => {
          xV.objectStore("videoHeaders").put(VV);
          const JV = xV.objectStore("videoChunks");
          for (const VV of eV) JV.put(VV)
        }))
      }
      putVideoProgress(VV, eV) {
        this.write(["videoProgress", "videoChunks"], (xV => {
          if (xV.objectStore("videoProgress").put(VV), eV > 0) {
            const {
              recordingId: JV,
              segmentId: YV
            } = VV;
            xV.objectStore("videoChunks").delete(IDBKeyRange.bound([JV, YV, 0], [JV, YV, eV], !1, !0))
          }
        }))
      }
      removeVideoChunks(VV, eV) {
        this.write(["videoChunks"], (xV => {
          xV.objectStore("videoChunks").delete(QV(VV, eV))
        }))
      }
      removeVideo(VV, eV) {
        this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (xV => {
          xV.objectStore("videoHeaders").delete([VV, eV]), xV.objectStore("videoChunks").delete(QV(VV, eV)), xV.objectStore("videoSequences").delete([VV, eV]), xV.objectStore("videoProgress").delete([VV, eV])
        }))
      }
      putTelemetry(VV) {
        this.write(["telemetry"], (eV => {
          eV.objectStore("telemetry").put(VV)
        }))
      }
      removeTelemetry(VV, eV) {
        this.write(["telemetry"], (xV => {
          xV.objectStore("telemetry").delete([VV, eV])
        }))
      }
      putDom(VV) {
        this.write(["dom"], (eV => {
          eV.objectStore("dom").put(VV)
        }))
      }
      queueDom(VV, eV, xV) {
        this.write(["recordings", "dom", "domTail"], (JV => {
          JV.objectStore("recordings").put(VV), JV.objectStore("dom").put(eV), JV.objectStore("domTail").delete(QV(eV.recordingId, xV))
        }))
      }
      putDomTail(VV) {
        this.tailRecordings.add(VV.recordingId), this.write(["domTail"], (eV => {
          eV.objectStore("domTail").put(VV)
        }))
      }
      removeDomTail(VV, eV) {
        this.write(["domTail"], (xV => {
          xV.objectStore("domTail").delete(QV(VV, eV))
        }))
      }
      removeDom(VV, eV) {
        this.write(["dom"], (xV => {
          xV.objectStore("dom").delete([VV, eV])
        }))
      }
      async listRecordings() {
        const VV = await this.open();
        return await UV(VV.transaction("recordings", "readonly").objectStore("recordings").getAll())
      }
      async read(VV) {
        const eV = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
          xV = pV(VV.recordingId),
          JV = VV => UV(eV.objectStore(VV).getAll(xV)),
          [YV, yV, QV, nV, wV, ZV, vV] = await Promise.all([JV("videoHeaders"), JV("videoChunks"), JV("videoSequences"), JV("videoProgress"), JV("telemetry"), JV("dom"), JV("domTail")]);
        return {
          recording: VV,
          telemetry: wV,
          dom: ZV,
          domTails: vV,
          video: YV.map((VV => {
            var eV, xV, JV;
            return {
              header: VV,
              sequence: null !== (eV = null === (xV = QV.find((eV => eV.segmentId === VV.segmentId))) || void 0 === xV ? void 0 : xV.sequence) && void 0 !== eV ? eV : null,
              progress: null !== (JV = nV.find((eV => eV.segmentId === VV.segmentId))) && void 0 !== JV ? JV : null,
              chunks: yV.filter((eV => eV.segmentId === VV.segmentId))
            }
          }))
        }
      }
      async deleteRecording(VV) {
        const eV = (await this.open()).transaction([...YV], "readwrite");
        eV.objectStore("recordings").delete(VV);
        for (const xV of YV.slice(1)) eV.objectStore(xV).delete(pV(VV));
        await yV(eV)
      }
      async forgetSent(VV, eV) {
        const xV = (await this.open()).transaction([...YV], "readwrite"),
          {
            recordingId: JV
          } = VV;
        xV.objectStore("recordings").put(VV);
        for (const YV of eV.videoSegmentIds) xV.objectStore("videoHeaders").delete([JV, YV]), xV.objectStore("videoChunks").delete(QV(JV, YV)), xV.objectStore("videoSequences").delete([JV, YV]), xV.objectStore("videoProgress").delete([JV, YV]);
        for (const YV of eV.telemetrySequences) xV.objectStore("telemetry").delete([JV, YV]);
        for (const YV of eV.domSequences) xV.objectStore("dom").delete([JV, YV]);
        for (const YV of eV.domTailChunks) xV.objectStore("domTail").delete(QV(JV, YV));
        await yV(xV)
      }
      write(VV, eV) {
        if (this.failed) return;
        const xV = xV => {
          try {
            var JV;
            const YV = xV.transaction(VV, "readwrite");
            eV(YV), null === (JV = YV.commit) || void 0 === JV || JV.call(YV), yV(YV).catch((VV => {
              this.fail(VV)
            }))
          } catch (YV) {
            this.fail(YV)
          }
        };
        null === this.db ? this.open().then(xV, (VV => {
          this.fail(VV)
        })) : xV(this.db)
      }
      fail(VV) {
        this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", VV), this.dropTails())
      }
      dropTails() {
        if (null === this.db || 0 === this.tailRecordings.size) return;
        const VV = VV => {
          console.warn("Session replay couldn't drop its page recording tails from its upload journal.", VV)
        };
        try {
          const eV = this.db.transaction(["domTail"], "readwrite");
          for (const VV of this.tailRecordings) eV.objectStore("domTail").delete(pV(VV));
          yV(eV).catch(VV)
        } catch (eV) {
          VV(eV)
        }
      }
      open() {
        return this.opening ??= new Promise(((VV, eV) => {
          const xV = indexedDB.open(JV.g, 4);
          xV.onupgradeneeded = VV => {
            const eV = xV.result;
            VV.oldVersion < 1 && (eV.createObjectStore("recordings", {
              keyPath: "recordingId"
            }), eV.createObjectStore("videoHeaders", {
              keyPath: ["recordingId", "segmentId"]
            }), eV.createObjectStore("videoChunks", {
              keyPath: ["recordingId", "segmentId", "index"]
            }), eV.createObjectStore("videoSequences", {
              keyPath: ["recordingId", "segmentId"]
            }), eV.createObjectStore("telemetry", {
              keyPath: ["recordingId", "sequence"]
            })), VV.oldVersion < 2 && eV.createObjectStore("videoProgress", {
              keyPath: ["recordingId", "segmentId"]
            }), VV.oldVersion < 3 && eV.createObjectStore("dom", {
              keyPath: ["recordingId", "sequence"]
            }), eV.createObjectStore("domTail", {
              keyPath: ["recordingId", "chunkIndex", "fromChar"]
            })
          };
          let YV = !1;
          xV.onblocked = () => {
            YV = !0, eV(new Error("An older tab holds the upload journal at an earlier version"))
          }, xV.onsuccess = () => {
            YV ? xV.result.close() : (this.db = xV.result, this.db.onversionchange = () => {
              var VV;
              this.dropTails(), null === (VV = this.db) || void 0 === VV || VV.close(), this.db = null, this.opening = null
            }, VV(xV.result))
          }, xV.onerror = () => {
            eV(xV.error)
          }
        })), this.opening
      }
    }
  },
  35048: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV,
      e: () => UV,
      i: () => pV
    });
    var JV = xV(34892);
    const YV = new TextEncoder;

    function UV(VV, eV) {
      return new Blob([YV.encode(`${JSON.stringify(VV)}\n`), eV], {
        type: "text/plain"
      })
    }
    class yV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.token = VV, this.relay = eV, this.nowMs = xV, this.refused = !1, this.skipUntilMs = 0
      }
      async send(VV, eV, xV, YV, yV) {
        if (this.goesDirect(eV, xV)) return null;
        const pV = UV({
            token: this.token,
            contentType: xV,
            target: VV
          }, eV),
          QV = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: pV,
            signal: YV
          };
        let nV;
        try {
          const VV = eV.byteLength <= JV.b ? await JV.e.fetch(this.relay.url, QV, pV.size, xV) : await fetch(this.relay.url, QV);
          if (!VV.ok) throw new Error(`HTTP ${VV.status}`);
          if (nV = await VV.json(), "refused" !== nV.outcome && ("forwarded" !== nV.outcome || !Number.isInteger(nV.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(nV)}`)
        } catch (wV) {
          if (!0 === (null === yV || void 0 === yV ? void 0 : yV.aborted)) throw wV;
          return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", wV), this.skipUntilMs = this.nowMs() + 12e4, null
        }
        return "refused" === nV.outcome ? (console.info(`Session replay's part joiner refused to relay (${nV.reason}); uploading straight to storage.`), this.refused = !0, null) : nV.status
      }
      beacon(VV, eV, xV, JV) {
        if (this.goesDirect(eV, xV)) return null;
        const YV = UV({
          token: this.token,
          contentType: xV,
          target: VV
        }, eV);
        return JV.sendUploadBeacon(this.relay.url, YV, YV.size)
      }
      goesDirect(VV, eV) {
        return this.refused || this.nowMs() < this.skipUntilMs || VV.byteLength > this.relay.maxBytes || "video/mp4" === eV
      }
    }

    function pV(VV) {
      return void 0 === (null === VV || void 0 === VV ? void 0 : VV.relay) ? null : new yV(VV.token, VV.relay)
    }
    class QV {
      constructor() {
        this.relays = new Map
      }
      for (VV) {
        let eV = this.relays.get(VV.recordingId);
        return void 0 === eV && (eV = pV(VV.partJoiner), this.relays.set(VV.recordingId, eV)), eV
      }
    }
  },
  35055: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => vV,
      i: () => ZV,
      l: () => QV
    });
    var JV = xV(34892),
      YV = xV(1241),
      UV = xV(35063);
    const yV = 1024;

    function pV(VV) {
      return 6e4 + Math.ceil(VV / 16384 * 1e3)
    }

    function QV(VV, eV, xV) {
      const YV = new FormData;
      let UV = eV.byteLength + yV;
      for (const [yV, pV] of Object.entries(VV.fields)) YV.append(yV, pV), UV += (0, JV.f)(yV) + (0, JV.f)(pV);
      return YV.append("file", new Blob([eV], {
        type: xV
      })), {
        form: YV,
        byteLength: UV
      }
    }

    function nV(VV) {
      if (VV < 200 || VV > 299) throw new UV.d(`Segment POST failed with ${VV}`, VV)
    }

    function wV(VV, eV) {
      if ((VV < 200 || VV > 299) && (!eV || 412 !== VV)) throw new UV.d(`Segment PUT failed with ${VV}`, VV)
    }
    class ZV {
      constructor(VV) {
        var eV;
        let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.segmentUploadUrl = VV, this.deadline = void 0, this.relay = void 0, this.deadline = xV.deadline, this.relay = null !== (eV = xV.relay) && void 0 !== eV ? eV : null
      }
      requestPutUrl(VV) {
        return this.presign(VV)
      }
      requestPostTargets(VV) {
        return this.presign(VV)
      }
      async presign(VV) {
        const eV = await fetch(this.segmentUploadUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(VV),
          signal: this.signal(6e4)
        });
        if (!eV.ok) throw new UV.d(`Segment presign failed with ${eV.status}`, eV.status);
        return await eV.json()
      }
      async put(VV, eV, xV, YV) {
        const UV = await this.sendThroughRelay({
          method: "PUT",
          url: VV,
          ifNoneMatch: YV
        }, eV, xV);
        if (null !== UV) return void wV(UV, YV);
        const yV = {
          method: "PUT",
          headers: {
            "Content-Type": xV,
            ...YV ? {
              "If-None-Match": "*"
            } : {}
          },
          body: eV,
          signal: this.signal(pV(eV.byteLength))
        };
        wV((eV.byteLength <= JV.b ? await JV.e.fetch(VV, yV, eV.byteLength, xV) : await fetch(VV, yV)).status, YV)
      }
      async post(VV, eV, xV) {
        const YV = await this.sendThroughRelay({
          method: "POST",
          url: VV.url,
          fields: VV.fields
        }, eV, xV);
        if (null !== YV) return void nV(YV);
        const {
          form: UV,
          byteLength: yV
        } = QV(VV, eV, xV), wV = {
          method: "POST",
          body: UV,
          signal: this.signal(pV(yV))
        };
        nV((yV <= JV.b ? await JV.e.fetch(VV.url, wV, yV, xV) : await fetch(VV.url, wV)).status)
      }
      async sendThroughRelay(VV, eV, xV) {
        return null === this.relay ? null : await this.relay.send(VV, eV, xV, this.signal(pV(eV.byteLength)), this.deadline)
      }
      signal(VV) {
        const eV = (0, YV.u)(VV);
        return void 0 === this.deadline ? eV : (0, YV.m)([this.deadline, eV])
      }
    }
    class vV {
      async requestPutUrl(VV) {
        return {
          uploadUrl: "",
          key: `dry-run/${VV.kind}/${VV.sequence}`
        }
      }
      async requestPostTargets(VV) {
        return {
          targets: Array.from({
            length: VV.parts.count
          }, (() => ({
            url: "",
            fields: {}
          }))),
          expiresInSecs: 900
        }
      }
      put() {
        return Promise.resolve()
      }
      post() {
        return Promise.resolve()
      }
    }
  },
  34905: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    var JV = xV(34907);

    function YV(VV) {
      const eV = (new TextEncoder).encode(VV);
      return {
        bytes: (0, JV.b)(eV),
        inflatedBytes: eV.byteLength
      }
    }
  },
  35045: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    const JV = 20;
    let YV = Date.now() - performance.now();

    function UV() {
      const VV = performance.now(),
        eV = Date.now();
      return Math.abs(eV - (VV + YV)) > JV && (YV = eV - VV), VV + YV
    }
  },
  34886: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(5589),
      YV = xV(1230);

    function UV() {
      return {
        segmentUploadUrl: `${YV.clientSideServerUrls.indexUrl}${JV.B}`,
        manifestUrl: `${YV.clientSideServerUrls.indexUrl}${JV.p}`
      }
    }
  },
  34892: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV,
      e: () => UV,
      f: () => YV
    });
    const JV = 32768;

    function YV(VV) {
      return (new TextEncoder).encode(VV).byteLength
    }
    const UV = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(VV, eV, xV, JV) {
        if (this.inFlightBytes + xV > 49152) return await fetch(VV, eV);
        this.inFlightBytes += xV, this.countLabel(JV, 1);
        const YV = () => {
          this.inFlightBytes -= xV, this.countLabel(JV, -1)
        };
        let UV;
        try {
          UV = await fetch(VV, {
            ...eV,
            keepalive: !0
          })
        } catch (pV) {
          var yV;
          if (YV(), null !== (yV = eV.signal) && void 0 !== yV && yV.aborted) throw pV;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", pV), await fetch(VV, eV)
        }
        return YV(), UV
      }
      isInFlight(VV) {
        var eV;
        return (null !== (eV = this.inFlightLabels.get(VV)) && void 0 !== eV ? eV : 0) > 0
      }
      sendBeacon(VV, eV) {
        const xV = YV(eV);
        return !(this.inFlightBytes + xV > 57344) && this.beaconSent(navigator.sendBeacon(VV, new Blob([eV], {
          type: "text/plain"
        })), xV)
      }
      sendUploadBeacon(VV, eV, xV) {
        return !(this.inFlightBytes + xV > 40960) && this.beaconSent(navigator.sendBeacon(VV, eV), xV)
      }
      countLabel(VV, eV) {
        var xV;
        void 0 !== VV && this.inFlightLabels.set(VV, (null !== (xV = this.inFlightLabels.get(VV)) && void 0 !== xV ? xV : 0) + eV)
      }
      beaconSent(VV, eV) {
        return VV && (this.inFlightBytes += eV, setTimeout((() => {
          this.inFlightBytes -= eV
        }), 1e4)), VV
      }
    }
  },
  34889: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV
    });
    var JV = xV(34892),
      YV = xV(1241);
    const UV = 6e4;
    async function yV(VV, eV) {
      const xV = JSON.stringify(eV);
      try {
        const eV = await JV.e.fetch(VV, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: xV,
          signal: (0, YV.u)(UV)
        }, (0, JV.f)(xV));
        return await async function(VV) {
          if (!VV.ok) return VV.status >= 400 && VV.status < 500 && 408 !== VV.status && 429 !== VV.status ? "refused" : "retryLater";
          const eV = await VV.json();
          return "rejected" in eV ? (console.warn(`Session replay manifest refused: ${eV.reason}`), eV.retryable ? "retryLater" : "refused") : "uploaded"
        }(eV)
      } catch (yV) {
        return console.warn("Session replay manifest upload failed.", yV), "retryLater"
      }
    }
  },
  34924: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      f: () => QV
    });
    var JV = xV(34892);
    const YV = 16384,
      UV = 100,
      yV = (0, JV.f)(',"domSegments":[]');

    function pV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YV;
      const {
        domSegments: pV,
        ...QV
      } = VV.manifest, nV = () => ({
        ...VV,
        manifest: {
          ...QV,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        },
        creatorGrants: []
      }), wV = (0, JV.f)(JSON.stringify(nV())), ZV = [];
      let vV = {
          request: nV(),
          items: []
        },
        rV = wV;
      const kV = (VV, eV) => {
          var xV;
          return "domSegments" === eV ? null !== (xV = VV.manifest.domSegments) && void 0 !== xV ? xV : [] : "creatorGrants" === eV ? VV.creatorGrants : VV.manifest[eV]
        },
        bV = (VV, eV, xV) => xV + (VV.length > 0 ? 1 : "domSegments" === eV.list ? yV : 0);
      for (const YV of eV) {
        const VV = (0, JV.f)(JSON.stringify(YV.value));
        let eV = kV(vV.request, YV.list);
        vV.items.length > 0 && (rV + bV(eV, YV, VV) > xV || eV.length >= UV) && (ZV.push(vV), vV = {
          request: nV(),
          items: []
        }, rV = wV, eV = kV(vV.request, YV.list)), rV += bV(eV, YV, VV), "domSegments" === YV.list && (vV.request.manifest.domSegments = eV), eV.push(YV.value), vV.items.push(YV)
      }
      return ZV.push(vV), ZV
    }

    function QV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YV;
      return pV(VV, function(VV) {
        var eV;
        return [...VV.creatorGrants.map((VV => ({
          list: "creatorGrants",
          value: VV
        }))), ...VV.manifest.games.map((VV => ({
          list: "games",
          value: VV
        }))), ...VV.manifest.videoSegments.map((VV => ({
          list: "videoSegments",
          value: VV
        }))), ...VV.manifest.telemetrySegments.map((VV => ({
          list: "telemetrySegments",
          value: VV
        }))), ...(null !== (eV = VV.manifest.domSegments) && void 0 !== eV ? eV : []).map((VV => ({
          list: "domSegments",
          value: VV
        })))]
      }(VV), eV).map((VV => {
        let {
          request: eV
        } = VV;
        return eV
      }))
    }
  },
  35063: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    class JV extends Error {
      constructor(VV, eV) {
        super(VV), this.status = eV
      }
    }
  },
  5589: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => pV,
      D: () => vV,
      H: () => ZV,
      I: () => rV,
      K: () => wV,
      N: () => yV,
      b: () => UV,
      d: () => jV,
      h: () => qV,
      i: () => EV,
      l: () => bV,
      p: () => QV,
      t: () => BV,
      x: () => nV,
      y: () => kV
    });
    const JV = {
        maxFps: 30,
        bitrate: 178e4,
        minBitrate: 5e5,
        maxMacroblocks: 3600,
        keyframeIntervalMs: 2e3,
        segmentDurationMs: 3e4,
        manifestIntervalMs: 3e4,
        partDurationMs: 4e3,
        captureBudgetMsPerSecond: 20,
        captureFrameCostFloorMs: .6,
        softwareEncoderOnWindows: !0
      },
      YV = {
        ...JV,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        softwareEncoderOnWindows: !1
      },
      UV = {
        desktop: JV,
        mobile: YV,
        tablet: YV
      };

    function yV(VV, eV) {
      return {
        ...UV[eV],
        ...VV
      }
    }
    const pV = "/index/replay/segment-upload-url",
      QV = "/index/replay/manifest",
      nV = 65536;

    function wV(VV) {
      return {
        count: Math.ceil(VV.segmentDurationMs / VV.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * VV.bitrate / 8 * (VV.partDurationMs / 1e3)) + 32768
      }
    }
    const ZV = "/index/studio/replay-segment-urls",
      vV = 20,
      rV = 50,
      kV = 6e4,
      bV = 432e5,
      EV = "Chat",
      BV = {
        clock: "bloxd-clock",
        active: "bloxd-active",
        death: "player_death",
        error: "error"
      },
      jV = {
        FullSnapshot: 2,
        IncrementalSnapshot: 3,
        Meta: 4,
        Custom: 5,
        Plugin: 6
      },
      qV = {
        Mutation: 0,
        MouseMove: 1,
        MouseInteraction: 2,
        Scroll: 3,
        ViewportResize: 4,
        Input: 5,
        TouchMove: 6,
        MediaInteraction: 7,
        StyleSheetRule: 8,
        Drag: 12
      }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);
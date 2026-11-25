export const id = 131;
export const ids = [131];
export const modules = {
  34641: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => QM
    });
    var OM = iM(2590);
    const SM = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];

    function jM(MM) {
      return new Promise(((rM, iM) => {
        MM.onsuccess = () => {
          rM(MM.result)
        }, MM.onerror = () => {
          iM(MM.error)
        }
      }))
    }

    function aM(MM) {
      return new Promise(((rM, iM) => {
        MM.oncomplete = () => {
          rM()
        }, MM.onerror = () => {
          iM(MM.error)
        }, MM.onabort = () => {
          var rM;
          iM(null !== (rM = MM.error) && void 0 !== rM ? rM : new Error("IndexedDB transaction aborted"))
        }
      }))
    }

    function PM(MM) {
      return IDBKeyRange.bound([MM], [MM, []])
    }

    function nM(MM, rM) {
      return IDBKeyRange.bound([MM, rM], [MM, rM, []])
    }
    class QM {
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
      putRecording(MM) {
        this.write(["recordings"], (rM => {
          rM.objectStore("recordings").put(MM)
        }))
      }
      putVideoSequence(MM, rM, iM) {
        this.write(["recordings", "videoSequences"], (OM => {
          OM.objectStore("recordings").put(MM), OM.objectStore("videoSequences").put({
            recordingId: MM.recordingId,
            segmentId: rM,
            sequence: iM
          })
        }))
      }
      appendVideo(MM, rM) {
        this.write(["videoHeaders", "videoChunks"], (iM => {
          iM.objectStore("videoHeaders").put(MM);
          const OM = iM.objectStore("videoChunks");
          for (const MM of rM) OM.put(MM)
        }))
      }
      putVideoProgress(MM, rM) {
        this.write(["videoProgress", "videoChunks"], (iM => {
          if (iM.objectStore("videoProgress").put(MM), rM > 0) {
            const {
              recordingId: OM,
              segmentId: SM
            } = MM;
            iM.objectStore("videoChunks").delete(IDBKeyRange.bound([OM, SM, 0], [OM, SM, rM], !1, !0))
          }
        }))
      }
      removeVideoChunks(MM, rM) {
        this.write(["videoChunks"], (iM => {
          iM.objectStore("videoChunks").delete(nM(MM, rM))
        }))
      }
      removeVideo(MM, rM) {
        this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (iM => {
          iM.objectStore("videoHeaders").delete([MM, rM]), iM.objectStore("videoChunks").delete(nM(MM, rM)), iM.objectStore("videoSequences").delete([MM, rM]), iM.objectStore("videoProgress").delete([MM, rM])
        }))
      }
      putTelemetry(MM) {
        this.write(["telemetry"], (rM => {
          rM.objectStore("telemetry").put(MM)
        }))
      }
      removeTelemetry(MM, rM) {
        this.write(["telemetry"], (iM => {
          iM.objectStore("telemetry").delete([MM, rM])
        }))
      }
      putDom(MM) {
        this.write(["dom"], (rM => {
          rM.objectStore("dom").put(MM)
        }))
      }
      queueDom(MM, rM, iM) {
        this.write(["recordings", "dom", "domTail"], (OM => {
          OM.objectStore("recordings").put(MM), OM.objectStore("dom").put(rM), OM.objectStore("domTail").delete(nM(rM.recordingId, iM))
        }))
      }
      putDomTail(MM) {
        this.tailRecordings.add(MM.recordingId), this.write(["domTail"], (rM => {
          rM.objectStore("domTail").put(MM)
        }))
      }
      removeDomTail(MM, rM) {
        this.write(["domTail"], (iM => {
          iM.objectStore("domTail").delete(nM(MM, rM))
        }))
      }
      removeDom(MM, rM) {
        this.write(["dom"], (iM => {
          iM.objectStore("dom").delete([MM, rM])
        }))
      }
      async listRecordings() {
        const MM = await this.open();
        return await jM(MM.transaction("recordings", "readonly").objectStore("recordings").getAll())
      }
      async read(MM) {
        const rM = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
          iM = PM(MM.recordingId),
          OM = MM => jM(rM.objectStore(MM).getAll(iM)),
          [SM, aM, nM, QM, zM, LM, mM] = await Promise.all([OM("videoHeaders"), OM("videoChunks"), OM("videoSequences"), OM("videoProgress"), OM("telemetry"), OM("dom"), OM("domTail")]);
        return {
          recording: MM,
          telemetry: zM,
          dom: LM,
          domTails: mM,
          video: SM.map((MM => {
            var rM, iM, OM;
            return {
              header: MM,
              sequence: null !== (rM = null === (iM = nM.find((rM => rM.segmentId === MM.segmentId))) || void 0 === iM ? void 0 : iM.sequence) && void 0 !== rM ? rM : null,
              progress: null !== (OM = QM.find((rM => rM.segmentId === MM.segmentId))) && void 0 !== OM ? OM : null,
              chunks: aM.filter((rM => rM.segmentId === MM.segmentId))
            }
          }))
        }
      }
      async deleteRecording(MM) {
        const rM = (await this.open()).transaction([...SM], "readwrite");
        rM.objectStore("recordings").delete(MM);
        for (const iM of SM.slice(1)) rM.objectStore(iM).delete(PM(MM));
        await aM(rM)
      }
      async forgetSent(MM, rM) {
        const iM = (await this.open()).transaction([...SM], "readwrite"),
          {
            recordingId: OM
          } = MM;
        iM.objectStore("recordings").put(MM);
        for (const SM of rM.videoSegmentIds) iM.objectStore("videoHeaders").delete([OM, SM]), iM.objectStore("videoChunks").delete(nM(OM, SM)), iM.objectStore("videoSequences").delete([OM, SM]), iM.objectStore("videoProgress").delete([OM, SM]);
        for (const SM of rM.telemetrySequences) iM.objectStore("telemetry").delete([OM, SM]);
        for (const SM of rM.domSequences) iM.objectStore("dom").delete([OM, SM]);
        for (const SM of rM.domTailChunks) iM.objectStore("domTail").delete(nM(OM, SM));
        await aM(iM)
      }
      write(MM, rM) {
        if (this.failed) return;
        const iM = iM => {
          try {
            var OM;
            const SM = iM.transaction(MM, "readwrite");
            rM(SM), null === (OM = SM.commit) || void 0 === OM || OM.call(SM), aM(SM).catch((MM => {
              this.fail(MM)
            }))
          } catch (SM) {
            this.fail(SM)
          }
        };
        null === this.db ? this.open().then(iM, (MM => {
          this.fail(MM)
        })) : iM(this.db)
      }
      fail(MM) {
        this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", MM), this.dropTails())
      }
      dropTails() {
        if (null === this.db || 0 === this.tailRecordings.size) return;
        const MM = MM => {
          console.warn("Session replay couldn't drop its page recording tails from its upload journal.", MM)
        };
        try {
          const rM = this.db.transaction(["domTail"], "readwrite");
          for (const MM of this.tailRecordings) rM.objectStore("domTail").delete(PM(MM));
          aM(rM).catch(MM)
        } catch (rM) {
          MM(rM)
        }
      }
      open() {
        return this.opening ??= new Promise(((MM, rM) => {
          const iM = indexedDB.open(OM.i, 4);
          iM.onupgradeneeded = MM => {
            const rM = iM.result;
            MM.oldVersion < 1 && (rM.createObjectStore("recordings", {
              keyPath: "recordingId"
            }), rM.createObjectStore("videoHeaders", {
              keyPath: ["recordingId", "segmentId"]
            }), rM.createObjectStore("videoChunks", {
              keyPath: ["recordingId", "segmentId", "index"]
            }), rM.createObjectStore("videoSequences", {
              keyPath: ["recordingId", "segmentId"]
            }), rM.createObjectStore("telemetry", {
              keyPath: ["recordingId", "sequence"]
            })), MM.oldVersion < 2 && rM.createObjectStore("videoProgress", {
              keyPath: ["recordingId", "segmentId"]
            }), MM.oldVersion < 3 && rM.createObjectStore("dom", {
              keyPath: ["recordingId", "sequence"]
            }), rM.createObjectStore("domTail", {
              keyPath: ["recordingId", "chunkIndex", "fromChar"]
            })
          };
          let SM = !1;
          iM.onblocked = () => {
            SM = !0, rM(new Error("An older tab holds the upload journal at an earlier version"))
          }, iM.onsuccess = () => {
            SM ? iM.result.close() : (this.db = iM.result, this.db.onversionchange = () => {
              var MM;
              this.dropTails(), null === (MM = this.db) || void 0 === MM || MM.close(), this.db = null, this.opening = null
            }, MM(iM.result))
          }, iM.onerror = () => {
            rM(iM.error)
          }
        })), this.opening
      }
    }
  },
  34788: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM,
      i: () => jM,
      l: () => PM
    });
    var OM = iM(34639);
    const SM = new TextEncoder;

    function jM(MM, rM) {
      return new Blob([SM.encode(`${JSON.stringify(MM)}\n`), rM], {
        type: "text/plain"
      })
    }
    class aM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.token = MM, this.relay = rM, this.nowMs = iM, this.refused = !1, this.skipUntilMs = 0
      }
      async send(MM, rM, iM, SM, aM) {
        if (this.goesDirect(rM, iM)) return null;
        const PM = jM({
            token: this.token,
            contentType: iM,
            target: MM
          }, rM),
          nM = {
            method: "POST",
            headers: {
              "Content-Type": "text/plain"
            },
            body: PM,
            signal: SM
          };
        let QM;
        try {
          const MM = rM.byteLength <= OM.e ? await OM.h.fetch(this.relay.url, nM, PM.size, iM) : await fetch(this.relay.url, nM);
          if (!MM.ok) throw new Error(`HTTP ${MM.status}`);
          if (QM = await MM.json(), "refused" !== QM.outcome && ("forwarded" !== QM.outcome || !Number.isInteger(QM.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(QM)}`)
        } catch (zM) {
          if (!0 === (null === aM || void 0 === aM ? void 0 : aM.aborted)) throw zM;
          return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", zM), this.skipUntilMs = this.nowMs() + 12e4, null
        }
        return "refused" === QM.outcome ? (console.info(`Session replay's part joiner refused to relay (${QM.reason}); uploading straight to storage.`), this.refused = !0, null) : QM.status
      }
      beacon(MM, rM, iM, OM) {
        if (this.goesDirect(rM, iM)) return null;
        const SM = jM({
          token: this.token,
          contentType: iM,
          target: MM
        }, rM);
        return OM.sendUploadBeacon(this.relay.url, SM, SM.size)
      }
      goesDirect(MM, rM) {
        return this.refused || this.nowMs() < this.skipUntilMs || MM.byteLength > this.relay.maxBytes || "video/mp4" === rM
      }
    }

    function PM(MM) {
      return void 0 === (null === MM || void 0 === MM ? void 0 : MM.relay) ? null : new aM(MM.token, MM.relay)
    }
    class nM {
      constructor() {
        this.relays = new Map
      }
      for (MM) {
        let rM = this.relays.get(MM.recordingId);
        return void 0 === rM && (rM = PM(MM.partJoiner), this.relays.set(MM.recordingId, rM)), rM
      }
    }
  },
  34793: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => mM,
      e: () => LM,
      f: () => nM
    });
    var OM = iM(34639),
      SM = iM(1215),
      jM = iM(34799);
    const aM = 1024;

    function PM(MM) {
      return 6e4 + Math.ceil(MM / 16384 * 1e3)
    }

    function nM(MM, rM, iM) {
      const SM = new FormData;
      let jM = rM.byteLength + aM;
      for (const [aM, PM] of Object.entries(MM.fields)) SM.append(aM, PM), jM += (0, OM.k)(aM) + (0, OM.k)(PM);
      return SM.append("file", new Blob([rM], {
        type: iM
      })), {
        form: SM,
        byteLength: jM
      }
    }

    function QM(MM) {
      if (MM < 200 || MM > 299) throw new jM.d(`Segment POST failed with ${MM}`, MM)
    }

    function zM(MM, rM) {
      if ((MM < 200 || MM > 299) && (!rM || 412 !== MM)) throw new jM.d(`Segment PUT failed with ${MM}`, MM)
    }
    class LM {
      constructor(MM) {
        var rM;
        let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.segmentUploadUrl = MM, this.deadline = void 0, this.relay = void 0, this.deadline = iM.deadline, this.relay = null !== (rM = iM.relay) && void 0 !== rM ? rM : null
      }
      requestPutUrl(MM) {
        return this.presign(MM)
      }
      requestPostTargets(MM) {
        return this.presign(MM)
      }
      async presign(MM) {
        const rM = await fetch(this.segmentUploadUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(MM),
          signal: this.signal(6e4)
        });
        if (!rM.ok) throw new jM.d(`Segment presign failed with ${rM.status}`, rM.status);
        return await rM.json()
      }
      async put(MM, rM, iM, SM) {
        const jM = await this.sendThroughRelay({
          method: "PUT",
          url: MM,
          ifNoneMatch: SM
        }, rM, iM);
        if (null !== jM) return void zM(jM, SM);
        const aM = {
          method: "PUT",
          headers: {
            "Content-Type": iM,
            ...SM ? {
              "If-None-Match": "*"
            } : {}
          },
          body: rM,
          signal: this.signal(PM(rM.byteLength))
        };
        zM((rM.byteLength <= OM.e ? await OM.h.fetch(MM, aM, rM.byteLength, iM) : await fetch(MM, aM)).status, SM)
      }
      async post(MM, rM, iM) {
        const SM = await this.sendThroughRelay({
          method: "POST",
          url: MM.url,
          fields: MM.fields
        }, rM, iM);
        if (null !== SM) return void QM(SM);
        const {
          form: jM,
          byteLength: aM
        } = nM(MM, rM, iM), zM = {
          method: "POST",
          body: jM,
          signal: this.signal(PM(aM))
        };
        QM((aM <= OM.e ? await OM.h.fetch(MM.url, zM, aM, iM) : await fetch(MM.url, zM)).status)
      }
      async sendThroughRelay(MM, rM, iM) {
        return null === this.relay ? null : await this.relay.send(MM, rM, iM, this.signal(PM(rM.byteLength)), this.deadline)
      }
      signal(MM) {
        const rM = (0, SM.q)(MM);
        return void 0 === this.deadline ? rM : (0, SM.m)([this.deadline, rM])
      }
    }
    class mM {
      async requestPutUrl(MM) {
        return {
          uploadUrl: "",
          key: `dry-run/${MM.kind}/${MM.sequence}`
        }
      }
      async requestPostTargets(MM) {
        return {
          targets: Array.from({
            length: MM.parts.count
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
  34647: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM
    });
    var OM = iM(34654);

    function SM(MM) {
      const rM = (new TextEncoder).encode(MM);
      return {
        bytes: (0, OM.e)(rM),
        inflatedBytes: rM.byteLength
      }
    }
  },
  34785: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    const OM = 20;
    let SM = Date.now() - performance.now();

    function jM() {
      const MM = performance.now(),
        rM = Date.now();
      return Math.abs(rM - (MM + SM)) > OM && (SM = rM - MM), MM + SM
    }
  },
  34631: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM
    });
    var OM = iM(5479),
      SM = iM(1202);

    function jM() {
      return {
        segmentUploadUrl: `${SM.clientSideServerUrls.indexUrl}${OM.w}`,
        manifestUrl: `${SM.clientSideServerUrls.indexUrl}${OM.o}`
      }
    }
  },
  34639: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      h: () => jM,
      k: () => SM
    });
    const OM = 32768;

    function SM(MM) {
      return (new TextEncoder).encode(MM).byteLength
    }
    const jM = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(MM, rM, iM, OM) {
        if (this.inFlightBytes + iM > 49152) return await fetch(MM, rM);
        this.inFlightBytes += iM, this.countLabel(OM, 1);
        const SM = () => {
          this.inFlightBytes -= iM, this.countLabel(OM, -1)
        };
        let jM;
        try {
          jM = await fetch(MM, {
            ...rM,
            keepalive: !0
          })
        } catch (PM) {
          var aM;
          if (SM(), null !== (aM = rM.signal) && void 0 !== aM && aM.aborted) throw PM;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", PM), await fetch(MM, rM)
        }
        return SM(), jM
      }
      isInFlight(MM) {
        var rM;
        return (null !== (rM = this.inFlightLabels.get(MM)) && void 0 !== rM ? rM : 0) > 0
      }
      sendBeacon(MM, rM) {
        const iM = SM(rM);
        return !(this.inFlightBytes + iM > 57344) && this.beaconSent(navigator.sendBeacon(MM, new Blob([rM], {
          type: "text/plain"
        })), iM)
      }
      sendUploadBeacon(MM, rM, iM) {
        return !(this.inFlightBytes + iM > 40960) && this.beaconSent(navigator.sendBeacon(MM, rM), iM)
      }
      countLabel(MM, rM) {
        var iM;
        void 0 !== MM && this.inFlightLabels.set(MM, (null !== (iM = this.inFlightLabels.get(MM)) && void 0 !== iM ? iM : 0) + rM)
      }
      beaconSent(MM, rM) {
        return MM && (this.inFlightBytes += rM, setTimeout((() => {
          this.inFlightBytes -= rM
        }), 1e4)), MM
      }
    }
  },
  34633: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(34639),
      SM = iM(1215);
    const jM = 6e4;
    async function aM(MM, rM) {
      const iM = JSON.stringify(rM);
      try {
        const rM = await OM.h.fetch(MM, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: iM,
          signal: (0, SM.q)(jM)
        }, (0, OM.k)(iM));
        return await async function(MM) {
          if (!MM.ok) return MM.status >= 400 && MM.status < 500 && 408 !== MM.status && 429 !== MM.status ? "refused" : "retryLater";
          const rM = await MM.json();
          return "rejected" in rM ? (console.warn(`Session replay manifest refused: ${rM.reason}`), rM.retryable ? "retryLater" : "refused") : "uploaded"
        }(rM)
      } catch (aM) {
        return console.warn("Session replay manifest upload failed.", aM), "retryLater"
      }
    }
  },
  34670: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM,
      d: () => nM
    });
    var OM = iM(34639);
    const SM = 16384,
      jM = 100,
      aM = (0, OM.k)(',"domSegments":[]');

    function PM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SM;
      const {
        domSegments: PM,
        ...nM
      } = MM.manifest, QM = () => ({
        ...MM,
        manifest: {
          ...nM,
          videoSegments: [],
          telemetrySegments: [],
          games: []
        },
        creatorGrants: []
      }), zM = (0, OM.k)(JSON.stringify(QM())), LM = [];
      let mM = {
          request: QM(),
          items: []
        },
        HM = zM;
      const hM = (MM, rM) => {
          var iM;
          return "domSegments" === rM ? null !== (iM = MM.manifest.domSegments) && void 0 !== iM ? iM : [] : "creatorGrants" === rM ? MM.creatorGrants : MM.manifest[rM]
        },
        JM = (MM, rM, iM) => iM + (MM.length > 0 ? 1 : "domSegments" === rM.list ? aM : 0);
      for (const SM of rM) {
        const MM = (0, OM.k)(JSON.stringify(SM.value));
        let rM = hM(mM.request, SM.list);
        mM.items.length > 0 && (HM + JM(rM, SM, MM) > iM || rM.length >= jM) && (LM.push(mM), mM = {
          request: QM(),
          items: []
        }, HM = zM, rM = hM(mM.request, SM.list)), HM += JM(rM, SM, MM), "domSegments" === SM.list && (mM.request.manifest.domSegments = rM), rM.push(SM.value), mM.items.push(SM)
      }
      return LM.push(mM), LM
    }

    function nM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM;
      return PM(MM, function(MM) {
        var rM;
        return [...MM.creatorGrants.map((MM => ({
          list: "creatorGrants",
          value: MM
        }))), ...MM.manifest.games.map((MM => ({
          list: "games",
          value: MM
        }))), ...MM.manifest.videoSegments.map((MM => ({
          list: "videoSegments",
          value: MM
        }))), ...MM.manifest.telemetrySegments.map((MM => ({
          list: "telemetrySegments",
          value: MM
        }))), ...(null !== (rM = MM.manifest.domSegments) && void 0 !== rM ? rM : []).map((MM => ({
          list: "domSegments",
          value: MM
        })))]
      }(MM), rM).map((MM => {
        let {
          request: rM
        } = MM;
        return rM
      }))
    }
  },
  34799: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    class OM extends Error {
      constructor(MM, rM) {
        super(MM), this.status = rM
      }
    }
  },
  5479: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => LM,
      E: () => HM,
      G: () => zM,
      J: () => aM,
      c: () => jM,
      g: () => lM,
      h: () => EM,
      j: () => dM,
      l: () => JM,
      o: () => nM,
      r: () => yM,
      s: () => QM,
      v: () => hM,
      w: () => PM,
      x: () => mM
    });
    const OM = {
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
      SM = {
        ...OM,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        softwareEncoderOnWindows: !1
      },
      jM = {
        desktop: OM,
        mobile: SM,
        tablet: SM
      };

    function aM(MM, rM) {
      return {
        ...jM[rM],
        ...MM
      }
    }
    const PM = "/index/replay/segment-upload-url",
      nM = "/index/replay/manifest",
      QM = 65536;

    function zM(MM) {
      return {
        count: Math.ceil(MM.segmentDurationMs / MM.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * MM.bitrate / 8 * (MM.partDurationMs / 1e3)) + 32768
      }
    }
    const LM = "/index/studio/replay-segment-urls",
      mM = 20,
      HM = 50,
      hM = 6e4,
      JM = 432e5,
      dM = "Chat",
      yM = {
        clock: "bloxd-clock",
        active: "bloxd-active",
        death: "player_death",
        error: "error"
      },
      lM = {
        FullSnapshot: 2,
        IncrementalSnapshot: 3,
        Meta: 4,
        Custom: 5,
        Plugin: 6
      },
      EM = {
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
for (const MM in modules) Object.freeze(modules[MM]);
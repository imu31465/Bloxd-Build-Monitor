export const id = 64;
export const ids = [64];
export const modules = {
  34624: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      recoverReplayTails: () => DM
    });
    var OM = iM(5479),
      SM = iM(30),
      jM = iM(34631),
      aM = iM(1215);
    const PM = 35e3;
    async function nM(MM, rM, iM) {
      const OM = {
          token: MM.token,
          sequence: rM
        },
        SM = (0, aM.q)(PM),
        jM = void 0 === iM ? SM : (0, aM.m)([iM, SM]);
      let nM = !1;
      try {
        const rM = await fetch(MM.releaseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(OM),
          signal: jM
        });
        if (503 === rM.status) {
          const {
            reason: MM
          } = await rM.json();
          nM = "release_retrying" === MM || "shutting_down" === MM
        }
        if (!rM.ok) throw new Error(`HTTP ${rM.status}`);
        const iM = await rM.json();
        return "stored" === iM.outcome ? iM.stored : null
      } catch (QM) {
        if (jM.aborted || nM) throw QM;
        return console.warn(`Session replay couldn't ask the part joiner about video segment ${rM}; uploading it from the journal.`, QM), null
      }
    }
    var QM = iM(34633),
      zM = iM(34641),
      LM = iM(2590),
      mM = iM(34647),
      HM = iM(34670);
    async function hM(MM, rM, iM) {
      if (!MM.mayStartUpload()) return "retryLater";
      const {
        kind: OM,
        sequence: SM,
        contentType: jM
      } = iM;
      let aM;
      try {
        aM = await iM.bytes()
      } catch (PM) {
        return console.warn(`Session replay couldn't mux late ${OM} segment ${SM}; skipping it.`, PM), "refused"
      }
      try {
        const iM = MM.transportFor(rM),
          PM = await iM.requestPutUrl({
            uploadToken: rM.uploadToken,
            kind: OM,
            sequence: SM,
            contentType: jM,
            byteLength: aM.byteLength,
            late: !0
          });
        return "rejected" in PM ? (console.warn(`Session replay late ${OM} segment ${SM} refused: ${PM.reason}`), PM.retryable ? "retryLater" : "refused") : (await iM.put(PM.uploadUrl, aM, jM, "dom" === OM), "uploaded")
      } catch (PM) {
        return console.warn(`Session replay late ${OM} segment ${SM} upload failed; trying again later.`, PM), "retryLater"
      }
    }
    async function JM(MM, rM, iM) {
      for (const SM of [...iM.videoSegments, ...iM.telemetrySegments, ...null !== (OM = iM.domSegments) && void 0 !== OM ? OM : []]) {
        var OM;
        iM.endedAtMs = Math.max(iM.endedAtMs, SM.endMs)
      }
      for (const SM of (0, HM.d)({
          uploadToken: rM.uploadToken,
          manifest: iM,
          creatorGrants: [],
          late: !0
        })) {
        const iM = await MM.postManifest(rM, SM);
        if ("uploaded" !== iM) return iM
      }
      return "uploaded"
    }
    var dM = iM(34678),
      yM = iM(34697),
      lM = iM(34747),
      EM = iM(34776),
      UM = iM(34756);
    class GM {
      constructor(MM, rM, iM, OM, SM) {
        this.frameDurationS = iM, this.onFragment = SM, this.firstTimestampUs = void 0, this.lastTimestampUs = void 0, this.output = void 0, this.source = void 0, this.pending = void 0, this.chunkCount = 0, this.boxes = [], this.addingTimestampUs = null, this.firstTimestampUs = rM, this.lastTimestampUs = rM;
        const jM = MM => {
          this.boxes.push(MM)
        };
        this.output = new dM.c({
          format: new yM.k({
            fastStart: "fragmented",
            minimumFragmentDuration: OM,
            onFtyp: jM,
            onMoov: jM,
            onMoof: jM,
            onMdat: MM => {
              jM(MM), this.fragmentDone()
            }
          }),
          target: new lM.d
        }), this.source = new EM.g(MM), this.output.addVideoTrack(this.source), this.pending = this.output.start()
      }
      get durationUs() {
        return this.lastTimestampUs - this.firstTimestampUs
      }
      add(MM, rM) {
        const iM = new Uint8Array(MM.byteLength);
        MM.copyTo(iM), this.addData(iM, MM.type, MM.timestamp, rM)
      }
      addData(MM, rM, iM, OM) {
        const SM = new UM.e(MM, rM, (iM - this.firstTimestampUs) / 1e6, this.frameDurationS),
          jM = 0 === this.chunkCount++;
        this.lastTimestampUs = Math.max(this.lastTimestampUs, iM), this.pending = this.pending.then((() => (this.addingTimestampUs = iM, this.source.add(SM, jM ? {
          decoderConfig: OM
        } : void 0))))
      }
      async finish() {
        await this.pending, this.addingTimestampUs = null, await this.output.finalize()
      }
      fragmentDone() {
        var MM;
        const rM = CM(this.boxes);
        this.boxes = [], this.onFragment({
          bytes: rM,
          endUs: null !== (MM = this.addingTimestampUs) && void 0 !== MM ? MM : this.lastTimestampUs + 1e6 * this.frameDurationS
        })
      }
    }

    function CM(MM) {
      const rM = new Uint8Array(MM.reduce(((MM, rM) => MM + rM.byteLength), 0));
      let iM = 0;
      for (const OM of MM) rM.set(OM, iM), iM += OM.byteLength;
      return rM
    }
    iM(34785);

    function eM(MM, rM, iM, OM) {
      const SM = MM / 1e3 + iM;
      return {
        startMs: SM,
        endMs: SM + rM / 1e3 + 1e3 / OM
      }
    }
    const bM = 2,
      wM = 18e5;

    function tM(MM, rM) {
      const iM = rM[rM.length - 1].timestampUs - MM.firstTimestampUs,
        {
          startMs: OM,
          endMs: SM
        } = eM(MM.firstTimestampUs, iM, MM.epochOffsetMs, MM.fps);
      return {
        startMs: Math.round(OM),
        endMs: Math.round(SM),
        width: MM.width,
        height: MM.height,
        codec: MM.codec
      }
    }
    async function gM(MM, rM) {
      const iM = [],
        OM = new GM(MM.containerCodec, MM.firstTimestampUs, 1 / MM.fps, bM, (MM => {
          let {
            bytes: rM
          } = MM;
          iM.push(rM)
        }));
      for (const SM of rM) OM.addData(SM.data, SM.key ? "key" : "delta", SM.timestampUs, MM.decoderConfig);
      return await OM.finish(), CM(iM).buffer
    }

    function uM(MM, rM, iM) {
      var OM;
      const SM = null === (OM = MM.videoProgress) || void 0 === OM ? void 0 : OM.find((MM => MM.segmentId === rM));
      return void 0 !== SM && (null === iM || SM.partsLanded > iM.partsLanded) ? SM : iM
    }
    const RM = 6e5;
    async function pM(MM, rM) {
      const iM = {
        recordingId: rM.recordingId,
        outcome: "nothing",
        videoSegments: 0,
        telemetrySegments: 0,
        domSegments: 0
      };
      if (MM.nowMs() > MM.lateUploadUntilMs(rM) - RM) return {
        ...iM,
        outcome: "expired"
      };
      const OM = new Set;
      let SM;
      try {
        SM = await async function(MM, rM, iM, OM) {
          const {
            partJoiner: SM
          } = rM;
          if (void 0 === SM) return iM;
          const jM = MM.nowMs() > rM.manifest.endedAtMs + wM,
            aM = new Map;
          for (const {
              header: nM,
              sequence: QM,
              progress: zM
            }
            of iM.video)
            if (null !== QM && null === uM(rM, nM.segmentId, zM)) {
              let rM;
              try {
                rM = await MM.releaseJoined(SM, QM)
              } catch (PM) {
                if (!jM) {
                  OM.add(nM.segmentId);
                  continue
                }
                console.warn(`Session replay's part joiner didn't answer about video segment ${QM} in time; uploading it from the journal.`, PM), rM = null
              }
              null !== rM && aM.set(nM.segmentId, rM)
            } return {
            ...iM,
            joined: aM
          }
        }(MM, rM, await MM.store.read(rM), OM)
      } catch (lM) {
        return console.warn(`Session replay couldn't read what an earlier page load left of ${rM.recordingId}; trying again later.`, lM), {
          ...iM,
          outcome: "retryLater"
        }
      }
      const jM = [],
        aM = {
          ...rM.manifest,
          videoSegments: [],
          telemetrySegments: [],
          ...SM.dom.length + SM.domTails.length > 0 ? {
            domSegments: jM
          } : {}
        },
        PM = () => aM.videoSegments.length + aM.telemetrySegments.length + jM.length > 0,
        nM = function(MM, rM) {
          let iM = MM.video.reduce(((MM, rM) => {
            let {
              sequence: iM
            } = rM;
            return null === iM ? MM : Math.max(MM, iM + 1)
          }), rM.nextVideoSequence);
          return {
            segments: [...MM.video].sort(((MM, rM) => MM.header.segmentId - rM.header.segmentId)).map((OM => {
              var SM, jM, aM;
              let {
                header: PM,
                sequence: nM,
                progress: QM,
                chunks: zM
              } = OM;
              const LM = uM(rM, PM.segmentId, QM),
                mM = null === (SM = MM.joined) || void 0 === SM ? void 0 : SM.get(PM.segmentId),
                HM = null !== nM && void 0 !== mM ? {
                  sequence: nM,
                  ...mM.meta
                } : null !== nM && null !== LM ? {
                  sequence: nM,
                  ...LM.meta,
                  startMs: Math.round(LM.meta.startMs),
                  endMs: Math.round(LM.meta.endMs),
                  parts: LM.partsLanded
                } : null,
                hM = null !== (jM = null !== (aM = null === mM || void 0 === mM ? void 0 : mM.completeUntilUs) && void 0 !== aM ? aM : null === LM || void 0 === LM ? void 0 : LM.completeUntilUs) && void 0 !== jM ? jM : null,
                JM = function(MM) {
                  const rM = [...MM].sort(((MM, rM) => MM.index - rM.index)),
                    iM = [];
                  for (const OM of rM) {
                    if (0 === iM.length ? !OM.key : OM.index !== iM[0].index + iM.length) break;
                    iM.push(OM)
                  }
                  return iM
                }(null === hM ? zM : zM.filter((MM => MM.timestampUs >= hM))),
                dM = 0 === JM.length ? null : {
                  sequence: iM++,
                  header: {
                    ...PM,
                    firstTimestampUs: JM[0].timestampUs
                  },
                  chunks: JM
                };
              return {
                segmentId: PM.segmentId,
                landed: HM,
                tail: dM
              }
            })),
            nextSequence: iM
          }
        }(SM, rM),
        QM = function(MM, rM) {
          var iM;
          let OM = MM.dom.reduce(((MM, rM) => {
            let {
              sequence: iM
            } = rM;
            return Math.max(MM, iM + 1)
          }), null !== (iM = rM.nextDomSequence) && void 0 !== iM ? iM : 0);
          const SM = [...MM.domTails].sort(((MM, rM) => MM.chunkIndex - rM.chunkIndex || MM.fromChar - rM.fromChar)),
            jM = [];
          for (const aM of SM) {
            const MM = jM[jM.length - 1],
              rM = (null === MM || void 0 === MM ? void 0 : MM.chunkIndex) === aM.chunkIndex;
            aM.fromChar === (rM ? MM.text.length : 0) && (rM ? (MM.text += aM.text, MM.last = aM) : jM.push({
              chunkIndex: aM.chunkIndex,
              sequence: OM++,
              text: aM.text,
              last: aM
            }))
          }
          return {
            tails: jM,
            nextSequence: OM
          }
        }(SM, rM),
        zM = {
          videoSegmentIds: [],
          telemetrySequences: [],
          domSequences: [],
          domTailChunks: []
        };
      let LM = !1;
      const HM = async SM => {
        if (PM()) {
          const PM = await JM(MM, rM, aM);
          if ("retryLater" === SM && "uploaded" === PM) try {
            var jM;
            const iM = QM.tails.find((MM => {
                let {
                  chunkIndex: rM
                } = MM;
                return !zM.domTailChunks.includes(rM)
              })),
              OM = null !== (jM = null === iM || void 0 === iM ? void 0 : iM.sequence) && void 0 !== jM ? jM : QM.nextSequence;
            await MM.store.forgetSent({
              ...rM,
              nextVideoSequence: nM.nextSequence,
              nextDomSequence: OM
            }, zM)
          } catch (lM) {
            console.warn(`Session replay couldn't drop what it sent of ${rM.recordingId} from its journal.`, lM)
          }
          if ("refused" === PM && OM.size > 0) return {
            ...iM,
            outcome: "refused"
          }
        }
        return {
          ...iM,
          outcome: SM
        }
      };
      for (const {
          segmentId: mM,
          landed: JM,
          tail: EM
        }
        of nM.segments)
        if (!OM.has(mM)) {
          if (null !== JM && aM.videoSegments.push(JM), null !== EM) {
            const OM = await hM(MM, rM, {
              kind: "video",
              sequence: EM.sequence,
              contentType: "video/mp4",
              bytes: () => MM.mux(EM.header, EM.chunks)
            });
            if ("retryLater" === OM) return await HM(OM);
            "refused" === OM ? LM = !0 : (aM.videoSegments.push({
              sequence: EM.sequence,
              ...tM(EM.header, EM.chunks)
            }), iM.videoSegments++)
          }
          zM.videoSegmentIds.push(mM)
        } const dM = [...SM.telemetry].sort(((MM, rM) => MM.sequence - rM.sequence));
      for (const mM of dM) {
        const OM = mM.landed ? "uploaded" : await hM(MM, rM, {
          kind: "telemetry",
          sequence: mM.sequence,
          contentType: "application/octet-stream",
          bytes: async () => mM.bytes
        });
        if ("retryLater" === OM) return await HM(OM);
        zM.telemetrySequences.push(mM.sequence), "refused" !== OM ? (aM.telemetrySegments.push({
          sequence: mM.sequence,
          startMs: Math.round(mM.startMs),
          endMs: Math.round(mM.endMs)
        }), iM.telemetrySegments++) : LM = !0
      }
      const yM = [...SM.dom].sort(((MM, rM) => MM.sequence - rM.sequence));
      for (const {
          sequence: mM,
          chunk: JM,
          bytes: EM
        }
        of yM) {
        if (null !== EM) {
          const iM = await hM(MM, rM, {
            kind: "dom",
            sequence: mM,
            contentType: "application/octet-stream",
            bytes: async () => EM
          });
          if ("retryLater" === iM) return await HM(iM);
          if ("refused" === iM) {
            zM.domSequences.push(mM), LM = !0;
            continue
          }
        }
        jM.push({
          sequence: mM,
          ...JM
        }), zM.domSequences.push(mM), iM.domSegments++
      }
      for (const {
          chunkIndex: JM,
          sequence: EM,
          text: UM,
          last: GM
        }
        of QM.tails) {
        let OM;
        const SM = await hM(MM, rM, {
          kind: "dom",
          sequence: EM,
          contentType: "application/octet-stream",
          bytes: async () => (OM = (0, mM.c)(UM), OM.bytes.buffer)
        });
        if ("retryLater" === SM) return await HM(SM);
        if (zM.domTailChunks.push(JM), "refused" === SM) {
          LM = !0;
          continue
        }
        const {
          bytes: aM,
          inflatedBytes: PM
        } = OM, {
          startMs: nM,
          endMs: QM,
          summary: dM
        } = GM;
        jM.push({
          sequence: EM,
          startMs: nM,
          endMs: QM,
          byteLength: aM.byteLength,
          summary: {
            ...dM,
            size: PM
          }
        }), iM.domSegments++
      }
      return OM.size > 0 ? await HM("retryLater") : PM() ? {
        ...iM,
        outcome: await JM(MM, rM, aM)
      } : LM ? {
        ...iM,
        outcome: "refused"
      } : iM
    }
    var WM = iM(34788),
      sM = iM(34793);
    async function DM() {
      const MM = "undefined" === typeof navigator ? void 0 : navigator.locks;
      if (!zM.d.supported || void 0 === MM) return;
      const rM = new zM.d,
        iM = new WM.e,
        aM = await async function(MM) {
          const rM = [];
          for (const OM of await MM.store.listRecordings()) {
            let SM = {
              recordingId: OM.recordingId,
              outcome: "live",
              videoSegments: 0,
              telemetrySegments: 0,
              domSegments: 0
            };
            try {
              await MM.withLock(OM.recordingId, (async () => {
                const rM = (await MM.store.listRecordings()).find((MM => {
                  let {
                    recordingId: rM
                  } = MM;
                  return rM === OM.recordingId
                }));
                if (void 0 !== rM) {
                  try {
                    SM = await pM(MM, rM)
                  } catch (iM) {
                    console.warn(`Session replay couldn't recover what an earlier page load left of ${OM.recordingId}; forgetting it.`, iM), SM = {
                      ...SM,
                      outcome: "failed"
                    }
                  }
                  "retryLater" !== SM.outcome && await MM.store.deleteRecording(OM.recordingId)
                } else SM = {
                  ...SM,
                  outcome: "nothing"
                }
              }))
            } catch (iM) {
              console.warn(`Session replay couldn't forget ${OM.recordingId}'s journal.`, iM)
            }
            rM.push(SM)
          }
          return rM
        }({
          store: rM,
          transportFor: MM => {
            var rM;
            return new sM.e((null !== (rM = MM.endpoints) && void 0 !== rM ? rM : (0, jM.d)()).segmentUploadUrl, {
              relay: iM.for(MM)
            })
          },
          postManifest: (MM, rM) => {
            var iM;
            return (0, QM.b)((null !== (iM = MM.endpoints) && void 0 !== iM ? iM : (0, jM.d)()).manifestUrl, rM)
          },
          withLock: async (rM, iM) => {
            await MM.request((0, LM.q)(rM), {
              ifAvailable: !0
            }, (async MM => {
              null !== MM && await iM()
            }))
          },
          mux: gM,
          releaseJoined: nM,
          nowMs: Date.now,
          lateUploadUntilMs: MM => {
            var rM;
            return null !== (rM = MM.lateUploadUntilMs) && void 0 !== rM ? rM : MM.expiresAtMs + OM.l
          },
          mayStartUpload: () => !0
        });
      for (const OM of aM) "live" !== OM.outcome && console.info(`Session replay: ${OM.outcome} what an earlier page load left of ${OM.recordingId} (${OM.videoSegments} video, ${OM.telemetrySegments} telemetry, ${OM.domSegments} page recording).`);
      0 === (await rM.listRecordings()).length && SM.g.removeItem(LM.m)
    }
  },
  34750: () => {}
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
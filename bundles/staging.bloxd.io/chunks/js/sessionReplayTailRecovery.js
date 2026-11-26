export const id = 64;
export const ids = [64];
export const modules = {
  34881: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      recoverReplayTails: () => DV
    });
    var JV = xV(5589),
      YV = xV(40),
      UV = xV(34886),
      yV = xV(1241);
    const pV = 35e3;
    async function QV(VV, eV, xV) {
      const JV = {
          token: VV.token,
          sequence: eV
        },
        YV = (0, yV.u)(pV),
        UV = void 0 === xV ? YV : (0, yV.m)([xV, YV]);
      let QV = !1;
      try {
        const eV = await fetch(VV.releaseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(JV),
          signal: UV
        });
        if (503 === eV.status) {
          const {
            reason: VV
          } = await eV.json();
          QV = "release_retrying" === VV || "shutting_down" === VV
        }
        if (!eV.ok) throw new Error(`HTTP ${eV.status}`);
        const xV = await eV.json();
        return "stored" === xV.outcome ? xV.stored : null
      } catch (nV) {
        if (UV.aborted || QV) throw nV;
        return console.warn(`Session replay couldn't ask the part joiner about video segment ${eV}; uploading it from the journal.`, nV), null
      }
    }
    var nV = xV(34889),
      wV = xV(34898),
      ZV = xV(2645),
      vV = xV(34905),
      rV = xV(34924);
    async function kV(VV, eV, xV) {
      if (!VV.mayStartUpload()) return "retryLater";
      const {
        kind: JV,
        sequence: YV,
        contentType: UV
      } = xV;
      let yV;
      try {
        yV = await xV.bytes()
      } catch (pV) {
        return console.warn(`Session replay couldn't mux late ${JV} segment ${YV}; skipping it.`, pV), "refused"
      }
      try {
        const xV = VV.transportFor(eV),
          pV = await xV.requestPutUrl({
            uploadToken: eV.uploadToken,
            kind: JV,
            sequence: YV,
            contentType: UV,
            byteLength: yV.byteLength,
            late: !0
          });
        return "rejected" in pV ? (console.warn(`Session replay late ${JV} segment ${YV} refused: ${pV.reason}`), pV.retryable ? "retryLater" : "refused") : (await xV.put(pV.uploadUrl, yV, UV, "dom" === JV), "uploaded")
      } catch (pV) {
        return console.warn(`Session replay late ${JV} segment ${YV} upload failed; trying again later.`, pV), "retryLater"
      }
    }
    async function bV(VV, eV, xV) {
      for (const YV of [...xV.videoSegments, ...xV.telemetrySegments, ...null !== (JV = xV.domSegments) && void 0 !== JV ? JV : []]) {
        var JV;
        xV.endedAtMs = Math.max(xV.endedAtMs, YV.endMs)
      }
      for (const YV of (0, rV.f)({
          uploadToken: eV.uploadToken,
          manifest: xV,
          creatorGrants: [],
          late: !0
        })) {
        const xV = await VV.postManifest(eV, YV);
        if ("uploaded" !== xV) return xV
      }
      return "uploaded"
    }
    var EV = xV(34930),
      BV = xV(34946),
      jV = xV(35006),
      qV = xV(35036),
      tV = xV(35017);
    class FV {
      constructor(VV, eV, xV, JV, YV) {
        this.frameDurationS = xV, this.onFragment = YV, this.firstTimestampUs = void 0, this.lastTimestampUs = void 0, this.output = void 0, this.source = void 0, this.pending = void 0, this.chunkCount = 0, this.boxes = [], this.addingTimestampUs = null, this.firstTimestampUs = eV, this.lastTimestampUs = eV;
        const UV = VV => {
          this.boxes.push(VV)
        };
        this.output = new EV.d({
          format: new BV.k({
            fastStart: "fragmented",
            minimumFragmentDuration: JV,
            onFtyp: UV,
            onMoov: UV,
            onMoof: UV,
            onMdat: VV => {
              UV(VV), this.fragmentDone()
            }
          }),
          target: new jV.f
        }), this.source = new qV.g(VV), this.output.addVideoTrack(this.source), this.pending = this.output.start()
      }
      get durationUs() {
        return this.lastTimestampUs - this.firstTimestampUs
      }
      add(VV, eV) {
        const xV = new Uint8Array(VV.byteLength);
        VV.copyTo(xV), this.addData(xV, VV.type, VV.timestamp, eV)
      }
      addData(VV, eV, xV, JV) {
        const YV = new tV.e(VV, eV, (xV - this.firstTimestampUs) / 1e6, this.frameDurationS),
          UV = 0 === this.chunkCount++;
        this.lastTimestampUs = Math.max(this.lastTimestampUs, xV), this.pending = this.pending.then((() => (this.addingTimestampUs = xV, this.source.add(YV, UV ? {
          decoderConfig: JV
        } : void 0))))
      }
      async finish() {
        await this.pending, this.addingTimestampUs = null, await this.output.finalize()
      }
      fragmentDone() {
        var VV;
        const eV = TV(this.boxes);
        this.boxes = [], this.onFragment({
          bytes: eV,
          endUs: null !== (VV = this.addingTimestampUs) && void 0 !== VV ? VV : this.lastTimestampUs + 1e6 * this.frameDurationS
        })
      }
    }

    function TV(VV) {
      const eV = new Uint8Array(VV.reduce(((VV, eV) => VV + eV.byteLength), 0));
      let xV = 0;
      for (const JV of VV) eV.set(JV, xV), xV += JV.byteLength;
      return eV
    }
    xV(35045);

    function PV(VV, eV, xV, JV) {
      const YV = VV / 1e3 + xV;
      return {
        startMs: YV,
        endMs: YV + eV / 1e3 + 1e3 / JV
      }
    }
    const AV = 2,
      NV = 18e5;

    function XV(VV, eV) {
      const xV = eV[eV.length - 1].timestampUs - VV.firstTimestampUs,
        {
          startMs: JV,
          endMs: YV
        } = PV(VV.firstTimestampUs, xV, VV.epochOffsetMs, VV.fps);
      return {
        startMs: Math.round(JV),
        endMs: Math.round(YV),
        width: VV.width,
        height: VV.height,
        codec: VV.codec
      }
    }
    async function MV(VV, eV) {
      const xV = [],
        JV = new FV(VV.containerCodec, VV.firstTimestampUs, 1 / VV.fps, AV, (VV => {
          let {
            bytes: eV
          } = VV;
          xV.push(eV)
        }));
      for (const YV of eV) JV.addData(YV.data, YV.key ? "key" : "delta", YV.timestampUs, VV.decoderConfig);
      return await JV.finish(), TV(xV).buffer
    }

    function zV(VV, eV, xV) {
      var JV;
      const YV = null === (JV = VV.videoProgress) || void 0 === JV ? void 0 : JV.find((VV => VV.segmentId === eV));
      return void 0 !== YV && (null === xV || YV.partsLanded > xV.partsLanded) ? YV : xV
    }
    const GV = 6e5;
    async function WV(VV, eV) {
      const xV = {
        recordingId: eV.recordingId,
        outcome: "nothing",
        videoSegments: 0,
        telemetrySegments: 0,
        domSegments: 0
      };
      if (VV.nowMs() > VV.lateUploadUntilMs(eV) - GV) return {
        ...xV,
        outcome: "expired"
      };
      const JV = new Set;
      let YV;
      try {
        YV = await async function(VV, eV, xV, JV) {
          const {
            partJoiner: YV
          } = eV;
          if (void 0 === YV) return xV;
          const UV = VV.nowMs() > eV.manifest.endedAtMs + NV,
            yV = new Map;
          for (const {
              header: QV,
              sequence: nV,
              progress: wV
            }
            of xV.video)
            if (null !== nV && null === zV(eV, QV.segmentId, wV)) {
              let eV;
              try {
                eV = await VV.releaseJoined(YV, nV)
              } catch (pV) {
                if (!UV) {
                  JV.add(QV.segmentId);
                  continue
                }
                console.warn(`Session replay's part joiner didn't answer about video segment ${nV} in time; uploading it from the journal.`, pV), eV = null
              }
              null !== eV && yV.set(QV.segmentId, eV)
            } return {
            ...xV,
            joined: yV
          }
        }(VV, eV, await VV.store.read(eV), JV)
      } catch (jV) {
        return console.warn(`Session replay couldn't read what an earlier page load left of ${eV.recordingId}; trying again later.`, jV), {
          ...xV,
          outcome: "retryLater"
        }
      }
      const UV = [],
        yV = {
          ...eV.manifest,
          videoSegments: [],
          telemetrySegments: [],
          ...YV.dom.length + YV.domTails.length > 0 ? {
            domSegments: UV
          } : {}
        },
        pV = () => yV.videoSegments.length + yV.telemetrySegments.length + UV.length > 0,
        QV = function(VV, eV) {
          let xV = VV.video.reduce(((VV, eV) => {
            let {
              sequence: xV
            } = eV;
            return null === xV ? VV : Math.max(VV, xV + 1)
          }), eV.nextVideoSequence);
          return {
            segments: [...VV.video].sort(((VV, eV) => VV.header.segmentId - eV.header.segmentId)).map((JV => {
              var YV, UV, yV;
              let {
                header: pV,
                sequence: QV,
                progress: nV,
                chunks: wV
              } = JV;
              const ZV = zV(eV, pV.segmentId, nV),
                vV = null === (YV = VV.joined) || void 0 === YV ? void 0 : YV.get(pV.segmentId),
                rV = null !== QV && void 0 !== vV ? {
                  sequence: QV,
                  ...vV.meta
                } : null !== QV && null !== ZV ? {
                  sequence: QV,
                  ...ZV.meta,
                  startMs: Math.round(ZV.meta.startMs),
                  endMs: Math.round(ZV.meta.endMs),
                  parts: ZV.partsLanded
                } : null,
                kV = null !== (UV = null !== (yV = null === vV || void 0 === vV ? void 0 : vV.completeUntilUs) && void 0 !== yV ? yV : null === ZV || void 0 === ZV ? void 0 : ZV.completeUntilUs) && void 0 !== UV ? UV : null,
                bV = function(VV) {
                  const eV = [...VV].sort(((VV, eV) => VV.index - eV.index)),
                    xV = [];
                  for (const JV of eV) {
                    if (0 === xV.length ? !JV.key : JV.index !== xV[0].index + xV.length) break;
                    xV.push(JV)
                  }
                  return xV
                }(null === kV ? wV : wV.filter((VV => VV.timestampUs >= kV))),
                EV = 0 === bV.length ? null : {
                  sequence: xV++,
                  header: {
                    ...pV,
                    firstTimestampUs: bV[0].timestampUs
                  },
                  chunks: bV
                };
              return {
                segmentId: pV.segmentId,
                landed: rV,
                tail: EV
              }
            })),
            nextSequence: xV
          }
        }(YV, eV),
        nV = function(VV, eV) {
          var xV;
          let JV = VV.dom.reduce(((VV, eV) => {
            let {
              sequence: xV
            } = eV;
            return Math.max(VV, xV + 1)
          }), null !== (xV = eV.nextDomSequence) && void 0 !== xV ? xV : 0);
          const YV = [...VV.domTails].sort(((VV, eV) => VV.chunkIndex - eV.chunkIndex || VV.fromChar - eV.fromChar)),
            UV = [];
          for (const yV of YV) {
            const VV = UV[UV.length - 1],
              eV = (null === VV || void 0 === VV ? void 0 : VV.chunkIndex) === yV.chunkIndex;
            yV.fromChar === (eV ? VV.text.length : 0) && (eV ? (VV.text += yV.text, VV.last = yV) : UV.push({
              chunkIndex: yV.chunkIndex,
              sequence: JV++,
              text: yV.text,
              last: yV
            }))
          }
          return {
            tails: UV,
            nextSequence: JV
          }
        }(YV, eV),
        wV = {
          videoSegmentIds: [],
          telemetrySequences: [],
          domSequences: [],
          domTailChunks: []
        };
      let ZV = !1;
      const rV = async YV => {
        if (pV()) {
          const pV = await bV(VV, eV, yV);
          if ("retryLater" === YV && "uploaded" === pV) try {
            var UV;
            const xV = nV.tails.find((VV => {
                let {
                  chunkIndex: eV
                } = VV;
                return !wV.domTailChunks.includes(eV)
              })),
              JV = null !== (UV = null === xV || void 0 === xV ? void 0 : xV.sequence) && void 0 !== UV ? UV : nV.nextSequence;
            await VV.store.forgetSent({
              ...eV,
              nextVideoSequence: QV.nextSequence,
              nextDomSequence: JV
            }, wV)
          } catch (jV) {
            console.warn(`Session replay couldn't drop what it sent of ${eV.recordingId} from its journal.`, jV)
          }
          if ("refused" === pV && JV.size > 0) return {
            ...xV,
            outcome: "refused"
          }
        }
        return {
          ...xV,
          outcome: YV
        }
      };
      for (const {
          segmentId: vV,
          landed: bV,
          tail: qV
        }
        of QV.segments)
        if (!JV.has(vV)) {
          if (null !== bV && yV.videoSegments.push(bV), null !== qV) {
            const JV = await kV(VV, eV, {
              kind: "video",
              sequence: qV.sequence,
              contentType: "video/mp4",
              bytes: () => VV.mux(qV.header, qV.chunks)
            });
            if ("retryLater" === JV) return await rV(JV);
            "refused" === JV ? ZV = !0 : (yV.videoSegments.push({
              sequence: qV.sequence,
              ...XV(qV.header, qV.chunks)
            }), xV.videoSegments++)
          }
          wV.videoSegmentIds.push(vV)
        } const EV = [...YV.telemetry].sort(((VV, eV) => VV.sequence - eV.sequence));
      for (const vV of EV) {
        const JV = vV.landed ? "uploaded" : await kV(VV, eV, {
          kind: "telemetry",
          sequence: vV.sequence,
          contentType: "application/octet-stream",
          bytes: async () => vV.bytes
        });
        if ("retryLater" === JV) return await rV(JV);
        wV.telemetrySequences.push(vV.sequence), "refused" !== JV ? (yV.telemetrySegments.push({
          sequence: vV.sequence,
          startMs: Math.round(vV.startMs),
          endMs: Math.round(vV.endMs)
        }), xV.telemetrySegments++) : ZV = !0
      }
      const BV = [...YV.dom].sort(((VV, eV) => VV.sequence - eV.sequence));
      for (const {
          sequence: vV,
          chunk: bV,
          bytes: qV
        }
        of BV) {
        if (null !== qV) {
          const xV = await kV(VV, eV, {
            kind: "dom",
            sequence: vV,
            contentType: "application/octet-stream",
            bytes: async () => qV
          });
          if ("retryLater" === xV) return await rV(xV);
          if ("refused" === xV) {
            wV.domSequences.push(vV), ZV = !0;
            continue
          }
        }
        UV.push({
          sequence: vV,
          ...bV
        }), wV.domSequences.push(vV), xV.domSegments++
      }
      for (const {
          chunkIndex: bV,
          sequence: qV,
          text: tV,
          last: FV
        }
        of nV.tails) {
        let JV;
        const YV = await kV(VV, eV, {
          kind: "dom",
          sequence: qV,
          contentType: "application/octet-stream",
          bytes: async () => (JV = (0, vV.e)(tV), JV.bytes.buffer)
        });
        if ("retryLater" === YV) return await rV(YV);
        if (wV.domTailChunks.push(bV), "refused" === YV) {
          ZV = !0;
          continue
        }
        const {
          bytes: yV,
          inflatedBytes: pV
        } = JV, {
          startMs: QV,
          endMs: nV,
          summary: EV
        } = FV;
        UV.push({
          sequence: qV,
          startMs: QV,
          endMs: nV,
          byteLength: yV.byteLength,
          summary: {
            ...EV,
            size: pV
          }
        }), xV.domSegments++
      }
      return JV.size > 0 ? await rV("retryLater") : pV() ? {
        ...xV,
        outcome: await bV(VV, eV, yV)
      } : ZV ? {
        ...xV,
        outcome: "refused"
      } : xV
    }
    var RV = xV(35048),
      gV = xV(35055);
    async function DV() {
      const VV = "undefined" === typeof navigator ? void 0 : navigator.locks;
      if (!wV.c.supported || void 0 === VV) return;
      const eV = new wV.c,
        xV = new RV.c,
        yV = await async function(VV) {
          const eV = [];
          for (const JV of await VV.store.listRecordings()) {
            let YV = {
              recordingId: JV.recordingId,
              outcome: "live",
              videoSegments: 0,
              telemetrySegments: 0,
              domSegments: 0
            };
            try {
              await VV.withLock(JV.recordingId, (async () => {
                const eV = (await VV.store.listRecordings()).find((VV => {
                  let {
                    recordingId: eV
                  } = VV;
                  return eV === JV.recordingId
                }));
                if (void 0 !== eV) {
                  try {
                    YV = await WV(VV, eV)
                  } catch (xV) {
                    console.warn(`Session replay couldn't recover what an earlier page load left of ${JV.recordingId}; forgetting it.`, xV), YV = {
                      ...YV,
                      outcome: "failed"
                    }
                  }
                  "retryLater" !== YV.outcome && await VV.store.deleteRecording(JV.recordingId)
                } else YV = {
                  ...YV,
                  outcome: "nothing"
                }
              }))
            } catch (xV) {
              console.warn(`Session replay couldn't forget ${JV.recordingId}'s journal.`, xV)
            }
            eV.push(YV)
          }
          return eV
        }({
          store: eV,
          transportFor: VV => {
            var eV;
            return new gV.i((null !== (eV = VV.endpoints) && void 0 !== eV ? eV : (0, UV.c)()).segmentUploadUrl, {
              relay: xV.for(VV)
            })
          },
          postManifest: (VV, eV) => {
            var xV;
            return (0, nV.b)((null !== (xV = VV.endpoints) && void 0 !== xV ? xV : (0, UV.c)()).manifestUrl, eV)
          },
          withLock: async (eV, xV) => {
            await VV.request((0, ZV.p)(eV), {
              ifAvailable: !0
            }, (async VV => {
              null !== VV && await xV()
            }))
          },
          mux: MV,
          releaseJoined: QV,
          nowMs: Date.now,
          lateUploadUntilMs: VV => {
            var eV;
            return null !== (eV = VV.lateUploadUntilMs) && void 0 !== eV ? eV : VV.expiresAtMs + JV.l
          },
          mayStartUpload: () => !0
        });
      for (const JV of yV) "live" !== JV.outcome && console.info(`Session replay: ${JV.outcome} what an earlier page load left of ${JV.recordingId} (${JV.videoSegments} video, ${JV.telemetrySegments} telemetry, ${JV.domSegments} page recording).`);
      0 === (await eV.listRecordings()).length && YV.m.removeItem(ZV.h)
    }
  },
  35015: () => {}
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);
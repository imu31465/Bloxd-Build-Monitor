export const id = 64;
export const ids = [64];
export const modules = {
  40657: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      recoverReplayTails: () => ce
    });
    var ye = He(40579),
      be = He(35),
      Me = He(40570),
      Ke = He(40548),
      Ue = He(40572),
      Fe = He(1155);
    const Je = 35e3;
    async function oe(ee, ie, He) {
      const ye = {
          token: ee.token,
          sequence: ie
        },
        be = (0, Fe.v)(Je),
        Me = void 0 === He ? be : (0, Fe.k)([He, be]);
      let Ke = !1;
      try {
        const ie = await fetch(ee.releaseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(ye),
          signal: Me
        });
        if (503 === ie.status) {
          const {
            reason: ee
          } = await ie.json();
          Ke = "release_retrying" === ee || "shutting_down" === ee
        }
        if (!ie.ok) throw new Error(`HTTP ${ie.status}`);
        const He = await ie.json();
        return "stored" === He.outcome ? He.stored : null
      } catch (Ue) {
        if (Me.aborted || Ke) throw Ue;
        return console.warn(`Session replay couldn't ask the part joiner about video segment ${ie}; uploading it from the journal.`, Ue), null
      }
    }
    var Re = He(40606),
      ke = He(40631),
      qe = He(5106),
      fe = He(40609);
    async function Te(ee, ie, He) {
      if (!ee.mayStartUpload()) return "retryLater";
      const {
        kind: ye,
        sequence: be,
        contentType: Me
      } = He;
      let Ke;
      try {
        Ke = await He.bytes()
      } catch (Ue) {
        return console.warn(`Session replay couldn't mux late ${ye} segment ${be}; skipping it.`, Ue), "refused"
      }
      try {
        const He = ee.transportFor(ie),
          Ue = await He.requestPutUrl({
            uploadToken: ie.uploadToken,
            kind: ye,
            sequence: be,
            contentType: Me,
            byteLength: Ke.byteLength,
            late: !0
          });
        return "rejected" in Ue ? (console.warn(`Session replay late ${ye} segment ${be} refused: ${Ue.reason}`), Ue.retryable ? "retryLater" : "refused") : (await He.put(Ue.uploadUrl, Ke, Me, Ue.ifNoneMatch), "uploaded")
      } catch (Ue) {
        return console.warn(`Session replay late ${ye} segment ${be} upload failed; trying again later.`, Ue), "retryLater"
      }
    }
    async function pe(ee, ie, He) {
      var ye;
      const be = ee.nowMs(),
        Me = (null !== (ye = He.domSegments) && void 0 !== ye ? ye : []).filter((ee => ee.endMs <= be));
      for (const Ke of [...He.videoSegments, ...He.telemetrySegments, ...Me]) He.endedAtMs = Math.max(He.endedAtMs, Ke.endMs);
      for (const Ke of (0, fe.e)({
          uploadToken: ie.uploadToken,
          manifest: He,
          creatorGrants: [],
          late: !0
        })) {
        const He = await ee.postManifest(ie, Ke);
        if ("uploaded" !== He) return He
      }
      return "uploaded"
    }
    var Xe = He(40665),
      ze = He(40679),
      Be = He(40726),
      Ee = He(40750),
      ge = He(40738);
    class Oe {
      constructor(ee, ie, He, ye, be) {
        this.frameDurationS = He, this.onFragment = be, this.firstTimestampUs = void 0, this.lastTimestampUs = void 0, this.output = void 0, this.source = void 0, this.pending = void 0, this.chunkCount = 0, this.boxes = [], this.addingTimestampUs = null, this.firstTimestampUs = ie, this.lastTimestampUs = ie;
        const Me = ee => {
          this.boxes.push(ee)
        };
        this.output = new Xe.c({
          format: new ze.i({
            fastStart: "fragmented",
            minimumFragmentDuration: ye,
            onFtyp: Me,
            onMoov: Me,
            onMoof: Me,
            onMdat: ee => {
              Me(ee), this.fragmentDone()
            }
          }),
          target: new Be.e
        }), this.source = new Ee.g(ee), this.output.addVideoTrack(this.source), this.pending = this.output.start()
      }
      get durationUs() {
        return this.lastTimestampUs - this.firstTimestampUs
      }
      add(ee, ie) {
        const He = new Uint8Array(ee.byteLength);
        ee.copyTo(He), this.addData(He, ee.type, ee.timestamp, ie)
      }
      addData(ee, ie, He, ye) {
        const be = new ge.c(ee, ie, (He - this.firstTimestampUs) / 1e6, this.frameDurationS),
          Me = 0 === this.chunkCount++;
        this.lastTimestampUs = Math.max(this.lastTimestampUs, He), this.pending = this.pending.then((() => (this.addingTimestampUs = He, this.source.add(be, Me ? {
          decoderConfig: ye
        } : void 0))))
      }
      async finish() {
        await this.pending, this.addingTimestampUs = null, await this.output.finalize()
      }
      fragmentDone() {
        var ee;
        const ie = de(this.boxes);
        this.boxes = [], this.onFragment({
          bytes: ie,
          endUs: null !== (ee = this.addingTimestampUs) && void 0 !== ee ? ee : this.lastTimestampUs + 1e6 * this.frameDurationS
        })
      }
    }

    function de(ee) {
      const ie = new Uint8Array(ee.reduce(((ee, ie) => ee + ie.byteLength), 0));
      let He = 0;
      for (const ye of ee) ie.set(ye, He), He += ye.byteLength;
      return ie
    }
    He(40602);

    function We(ee, ie, He, ye) {
      const be = ee / 1e3 + He;
      return {
        startMs: be,
        endMs: be + ie / 1e3 + 1e3 / ye
      }
    }
    const te = 2,
      Ze = 18e5;

    function we(ee, ie) {
      const He = ie[ie.length - 1].timestampUs - ee.firstTimestampUs,
        {
          startMs: ye,
          endMs: be
        } = We(ee.firstTimestampUs, He, ee.epochOffsetMs, ee.fps);
      return {
        startMs: Math.round(ye),
        endMs: Math.round(be),
        width: ee.width,
        height: ee.height,
        codec: ee.codec
      }
    }
    async function De(ee, ie) {
      const He = [],
        ye = new Oe(ee.containerCodec, ee.firstTimestampUs, 1 / ee.fps, te, (ee => {
          let {
            bytes: ie
          } = ee;
          He.push(ie)
        }));
      for (const be of ie) ye.addData(be.data, be.key ? "key" : "delta", be.timestampUs, ee.decoderConfig);
      return await ye.finish(), de(He).buffer
    }

    function Pe(ee, ie, He) {
      var ye;
      const be = null === (ye = ee.videoProgress) || void 0 === ye ? void 0 : ye.find((ee => ee.segmentId === ie));
      return void 0 !== be && (null === He || be.partsLanded > He.partsLanded) ? be : He
    }
    const Ae = 6e5;
    async function Ye(ee, ie) {
      const He = {
        recordingId: ie.recordingId,
        outcome: "nothing",
        videoSegments: 0,
        telemetrySegments: 0,
        domSegments: 0
      };
      if (ee.nowMs() > ee.lateUploadUntilMs(ie) - Ae) return {
        ...He,
        outcome: "expired"
      };
      const ye = new Set;
      let be;
      try {
        be = await async function(ee, ie, He, ye) {
          const {
            partJoiner: be
          } = ie;
          if (void 0 === be) return He;
          const Me = ee.nowMs() > ie.manifest.endedAtMs + Ze,
            Ke = new Map;
          for (const {
              header: Fe,
              sequence: Je,
              progress: oe
            }
            of He.video)
            if (null !== Je && null === Pe(ie, Fe.segmentId, oe)) {
              let ie;
              try {
                ie = await ee.releaseJoined(be, Je)
              } catch (Ue) {
                if (!Me) {
                  ye.add(Fe.segmentId);
                  continue
                }
                console.warn(`Session replay's part joiner didn't answer about video segment ${Je} in time; uploading it from the journal.`, Ue), ie = null
              }
              null !== ie && Ke.set(Fe.segmentId, ie)
            } return {
            ...He,
            joined: Ke
          }
        }(ee, ie, await ee.store.read(ie), ye)
      } catch (Xe) {
        return console.warn(`Session replay couldn't read what an earlier page load left of ${ie.recordingId}; trying again later.`, Xe), {
          ...He,
          outcome: "retryLater"
        }
      }
      const Me = [],
        Ke = {
          ...ie.manifest,
          videoSegments: [],
          telemetrySegments: [],
          ...be.dom.length + be.domTails.length > 0 ? {
            domSegments: Me
          } : {}
        },
        Ue = () => Ke.videoSegments.length + Ke.telemetrySegments.length + Me.length > 0,
        Fe = function(ee, ie) {
          let He = ee.video.reduce(((ee, ie) => {
            let {
              sequence: He
            } = ie;
            return null === He ? ee : Math.max(ee, He + 1)
          }), ie.nextVideoSequence);
          return {
            segments: [...ee.video].sort(((ee, ie) => ee.header.segmentId - ie.header.segmentId)).map((ye => {
              var be, Me, Ke;
              let {
                header: Ue,
                sequence: Fe,
                progress: Je,
                chunks: oe
              } = ye;
              const Re = Pe(ie, Ue.segmentId, Je),
                ke = null === (be = ee.joined) || void 0 === be ? void 0 : be.get(Ue.segmentId),
                qe = null !== Fe && void 0 !== ke ? {
                  sequence: Fe,
                  ...ke.meta
                } : null !== Fe && null !== Re ? {
                  sequence: Fe,
                  ...Re.meta,
                  startMs: Math.round(Re.meta.startMs),
                  endMs: Math.round(Re.meta.endMs),
                  parts: Re.partsLanded
                } : null,
                fe = null !== (Me = null !== (Ke = null === ke || void 0 === ke ? void 0 : ke.completeUntilUs) && void 0 !== Ke ? Ke : null === Re || void 0 === Re ? void 0 : Re.completeUntilUs) && void 0 !== Me ? Me : null,
                Te = function(ee) {
                  const ie = [...ee].sort(((ee, ie) => ee.index - ie.index)),
                    He = [];
                  for (const ye of ie) {
                    if (0 === He.length ? !ye.key : ye.index !== He[0].index + He.length) break;
                    He.push(ye)
                  }
                  return He
                }(null === fe ? oe : oe.filter((ee => ee.timestampUs >= fe))),
                pe = 0 === Te.length ? null : {
                  sequence: He++,
                  header: {
                    ...Ue,
                    firstTimestampUs: Te[0].timestampUs
                  },
                  chunks: Te
                };
              return {
                segmentId: Ue.segmentId,
                landed: qe,
                tail: pe
              }
            })),
            nextSequence: He
          }
        }(be, ie),
        Je = function(ee, ie) {
          var He;
          let ye = ee.dom.reduce(((ee, ie) => {
            let {
              sequence: He
            } = ie;
            return Math.max(ee, He + 1)
          }), null !== (He = ie.nextDomSequence) && void 0 !== He ? He : 0);
          const be = [...ee.domTails].sort(((ee, ie) => ee.chunkIndex - ie.chunkIndex || ee.fromChar - ie.fromChar)),
            Me = [];
          for (const Ke of be) {
            const ee = Me[Me.length - 1],
              ie = (null === ee || void 0 === ee ? void 0 : ee.chunkIndex) === Ke.chunkIndex;
            Ke.fromChar === (ie ? ee.text.length : 0) && (ie ? (ee.text += Ke.text, ee.last = Ke) : Me.push({
              chunkIndex: Ke.chunkIndex,
              sequence: ye++,
              text: Ke.text,
              last: Ke
            }))
          }
          return {
            tails: Me,
            nextSequence: ye
          }
        }(be, ie),
        oe = {
          videoSegmentIds: [],
          telemetrySequences: [],
          domSequences: [],
          domTailChunks: []
        };
      let Re = !1;
      const ke = async be => {
        if (Ue()) {
          const Ue = await pe(ee, ie, Ke);
          if ("retryLater" === be && "uploaded" === Ue) try {
            var Me;
            const He = Je.tails.find((ee => {
                let {
                  chunkIndex: ie
                } = ee;
                return !oe.domTailChunks.includes(ie)
              })),
              ye = null !== (Me = null === He || void 0 === He ? void 0 : He.sequence) && void 0 !== Me ? Me : Je.nextSequence;
            await ee.store.forgetSent({
              ...ie,
              nextVideoSequence: Fe.nextSequence,
              nextDomSequence: ye
            }, oe)
          } catch (Xe) {
            console.warn(`Session replay couldn't drop what it sent of ${ie.recordingId} from its journal.`, Xe)
          }
          if ("refused" === Ue && ye.size > 0) return {
            ...He,
            outcome: "refused"
          }
        }
        return {
          ...He,
          outcome: be
        }
      };
      for (const {
          segmentId: pe,
          landed: ze,
          tail: Be
        }
        of Fe.segments)
        if (!ye.has(pe)) {
          if (null !== ze && Ke.videoSegments.push(ze), null !== Be) {
            const ye = await Te(ee, ie, {
              kind: "video",
              sequence: Be.sequence,
              contentType: "video/mp4",
              bytes: () => ee.mux(Be.header, Be.chunks)
            });
            if ("retryLater" === ye) return await ke(ye);
            "refused" === ye ? Re = !0 : (Ke.videoSegments.push({
              sequence: Be.sequence,
              ...we(Be.header, Be.chunks)
            }), He.videoSegments++)
          }
          oe.videoSegmentIds.push(pe)
        } const qe = [...be.telemetry].sort(((ee, ie) => ee.sequence - ie.sequence));
      for (const pe of qe) {
        const ye = pe.landed ? "uploaded" : await Te(ee, ie, {
          kind: "telemetry",
          sequence: pe.sequence,
          contentType: "application/octet-stream",
          bytes: async () => pe.bytes
        });
        if ("retryLater" === ye) return await ke(ye);
        oe.telemetrySequences.push(pe.sequence), "refused" !== ye ? (Ke.telemetrySegments.push({
          sequence: pe.sequence,
          startMs: Math.round(pe.startMs),
          endMs: Math.round(pe.endMs)
        }), He.telemetrySegments++) : Re = !0
      }
      const fe = [...be.dom].sort(((ee, ie) => ee.sequence - ie.sequence));
      for (const {
          sequence: pe,
          chunk: ze,
          bytes: Be
        }
        of fe) {
        const ye = null === Be ? "uploaded" : await Te(ee, ie, {
          kind: "dom",
          sequence: pe,
          contentType: "application/octet-stream",
          bytes: async () => Be
        });
        if ("retryLater" === ye) return await ke(ye);
        oe.domSequences.push(pe), Me.push({
          sequence: pe,
          ...ze
        }), "uploaded" === ye && He.domSegments++
      }
      for (const {
          chunkIndex: pe,
          sequence: ze,
          text: Be,
          last: Ee
        }
        of Je.tails) {
        let ye;
        const be = await Te(ee, ie, {
          kind: "dom",
          sequence: ze,
          contentType: "application/octet-stream",
          bytes: async () => (ye = await ee.packDom(Be), ye.bytes.buffer)
        });
        if ("retryLater" === be) return await ke(be);
        if (oe.domTailChunks.push(pe), "refused" === be) {
          Re = !0;
          continue
        }
        const {
          bytes: Ke,
          inflatedBytes: Ue
        } = ye, {
          startMs: Fe,
          endMs: Je,
          summary: qe
        } = Ee;
        Me.push({
          sequence: ze,
          startMs: Fe,
          endMs: Je,
          byteLength: Ke.byteLength,
          summary: {
            ...qe,
            size: Ue
          }
        }), He.domSegments++
      }
      return ye.size > 0 ? await ke("retryLater") : Ue() ? {
        ...He,
        outcome: await pe(ee, ie, Ke)
      } : Re ? {
        ...He,
        outcome: "refused"
      } : He
    }
    var Ve = He(40592),
      ae = He(40617);
    async function ce() {
      const ee = "undefined" === typeof navigator ? void 0 : navigator.locks;
      if (!ke.b.supported || void 0 === ee) return;
      const ie = new ke.b,
        He = new Ve.c,
        Fe = new Me.e,
        Je = await async function(ee) {
          const ie = [];
          for (const ye of await ee.store.listRecordings()) {
            let be = {
              recordingId: ye.recordingId,
              outcome: "live",
              videoSegments: 0,
              telemetrySegments: 0,
              domSegments: 0
            };
            try {
              await ee.withLock(ye.recordingId, (async () => {
                const ie = (await ee.store.listRecordings()).find((ee => {
                  let {
                    recordingId: ie
                  } = ee;
                  return ie === ye.recordingId
                }));
                if (void 0 !== ie) {
                  try {
                    be = await Ye(ee, ie)
                  } catch (He) {
                    console.warn(`Session replay couldn't recover what an earlier page load left of ${ye.recordingId}; forgetting it.`, He), be = {
                      ...be,
                      outcome: "failed"
                    }
                  }
                  "retryLater" !== be.outcome && await ee.store.deleteRecording(ye.recordingId)
                } else be = {
                  ...be,
                  outcome: "nothing"
                }
              }))
            } catch (He) {
              console.warn(`Session replay couldn't forget ${ye.recordingId}'s journal.`, He)
            }
            ie.push(be)
          }
          return ie
        }({
          store: ie,
          transportFor: ee => {
            var ie;
            return new ae.i((null !== (ie = ee.endpoints) && void 0 !== ie ? ie : (0, Ue.b)()).segmentUploadUrl, {
              relay: He.for(ee)
            })
          },
          postManifest: (ee, ie) => {
            var He;
            return (0, Re.d)((null !== (He = ee.endpoints) && void 0 !== He ? He : (0, Ue.b)()).manifestUrl, ie)
          },
          withLock: async (ie, He) => {
            await ee.request((0, qe.w)(ie), {
              ifAvailable: !0
            }, (async ee => {
              null !== ee && await He()
            }))
          },
          mux: De,
          packDom: ee => Fe.pack(ee).catch((() => (0, Ke.c)(ee))),
          releaseJoined: oe,
          nowMs: Date.now,
          lateUploadUntilMs: ee => {
            var ie;
            return null !== (ie = ee.lateUploadUntilMs) && void 0 !== ie ? ie : ee.expiresAtMs + ye.d
          },
          mayStartUpload: () => !0
        }).finally((() => {
          Fe.close()
        }));
      for (const ye of Je) "live" !== ye.outcome && console.info(`Session replay: ${ye.outcome} what an earlier page load left of ${ye.recordingId} (${ye.videoSegments} video, ${ye.telemetrySegments} telemetry, ${ye.domSegments} page recording).`);
      0 === (await ie.listRecordings()).length && be.i.removeItem(qe.n)
    }
  },
  40729: () => {}
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);
export const id = 65;
export const ids = [65];
export const modules = {
  41474: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      recoverReplayTails: () => Gd
    });
    var Wd = md(41381),
      Fd = md(46),
      Rd = md(41370),
      Xd = md(41354),
      Kd = md(41372),
      hd = md(1268);
    const vd = 35e3;
    async function Qd(dd, Od, md) {
      const Wd = {
          token: dd.token,
          sequence: Od
        },
        Fd = (0, hd.s)(vd),
        Rd = void 0 === md ? Fd : (0, hd.j)([md, Fd]);
      let Xd = !1;
      try {
        const Od = await fetch(dd.releaseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(Wd),
          signal: Rd
        });
        if (503 === Od.status) {
          const {
            reason: dd
          } = await Od.json();
          Xd = "release_retrying" === dd || "shutting_down" === dd
        }
        if (!Od.ok) throw new Error(`HTTP ${Od.status}`);
        const md = await Od.json();
        return "stored" === md.outcome ? md.stored : null
      } catch (Kd) {
        if (Rd.aborted || Xd) throw Kd;
        return console.warn(`Session replay couldn't ask the part joiner about video segment ${Od}; uploading it from the journal.`, Kd), null
      }
    }
    var td = md(41407),
      od = md(41441),
      Nd = md(5375),
      qd = md(41416);
    async function Hd(dd, Od, md) {
      if (!dd.mayStartUpload()) return "retryLater";
      const {
        kind: Wd,
        sequence: Fd,
        contentType: Rd
      } = md;
      let Xd;
      try {
        Xd = await md.bytes()
      } catch (Kd) {
        return console.warn(`Session replay couldn't mux late ${Wd} segment ${Fd}; skipping it.`, Kd), "refused"
      }
      try {
        const md = dd.transportFor(Od),
          Kd = await md.requestPutUrl({
            uploadToken: Od.uploadToken,
            kind: Wd,
            sequence: Fd,
            contentType: Rd,
            byteLength: Xd.byteLength,
            late: !0
          });
        return "rejected" in Kd ? (console.warn(`Session replay late ${Wd} segment ${Fd} refused: ${Kd.reason}`), Kd.retryable ? "retryLater" : "refused") : (await md.put(Kd.uploadUrl, Xd, Rd, Kd.ifNoneMatch), "uploaded")
      } catch (Kd) {
        return console.warn(`Session replay late ${Wd} segment ${Fd} upload failed; trying again later.`, Kd), "retryLater"
      }
    }
    async function yd(dd, Od, md) {
      var Wd;
      const Fd = dd.nowMs(),
        Rd = (null !== (Wd = md.domSegments) && void 0 !== Wd ? Wd : []).filter((dd => dd.endMs <= Fd));
      for (const Xd of [...md.videoSegments, ...md.telemetrySegments, ...Rd]) md.endedAtMs = Math.max(md.endedAtMs, Xd.endMs);
      for (const Xd of (0, qd.e)({
          uploadToken: Od.uploadToken,
          manifest: md,
          creatorGrants: [],
          late: !0
        })) {
        const md = await dd.postManifest(Od, Xd);
        if ("uploaded" !== md) return md
      }
      return "uploaded"
    }
    var bd = md(41483),
      Td = md(41498),
      pd = md(41544),
      Yd = md(41569),
      gd = md(41555);
    class wd {
      constructor(dd, Od, md, Wd, Fd) {
        this.frameDurationS = md, this.onFragment = Fd, this.firstTimestampUs = void 0, this.lastTimestampUs = void 0, this.output = void 0, this.source = void 0, this.pending = void 0, this.chunkCount = 0, this.boxes = [], this.addingTimestampUs = null, this.firstTimestampUs = Od, this.lastTimestampUs = Od;
        const Rd = dd => {
          this.boxes.push(dd)
        };
        this.output = new bd.c({
          format: new Td.h({
            fastStart: "fragmented",
            minimumFragmentDuration: Wd,
            onFtyp: Rd,
            onMoov: Rd,
            onMoof: Rd,
            onMdat: dd => {
              Rd(dd), this.fragmentDone()
            }
          }),
          target: new pd.d
        }), this.source = new Yd.k(dd), this.output.addVideoTrack(this.source), this.pending = this.output.start()
      }
      get durationUs() {
        return this.lastTimestampUs - this.firstTimestampUs
      }
      add(dd, Od) {
        const md = new Uint8Array(dd.byteLength);
        dd.copyTo(md), this.addData(md, dd.type, dd.timestamp, Od)
      }
      addData(dd, Od, md, Wd) {
        const Fd = new gd.e(dd, Od, (md - this.firstTimestampUs) / 1e6, this.frameDurationS),
          Rd = 0 === this.chunkCount++;
        this.lastTimestampUs = Math.max(this.lastTimestampUs, md), this.pending = this.pending.then((() => (this.addingTimestampUs = md, this.source.add(Fd, Rd ? {
          decoderConfig: Wd
        } : void 0))))
      }
      async finish() {
        await this.pending, this.addingTimestampUs = null, await this.output.finalize()
      }
      fragmentDone() {
        var dd;
        const Od = Ed(this.boxes);
        this.boxes = [], this.onFragment({
          bytes: Od,
          endUs: null !== (dd = this.addingTimestampUs) && void 0 !== dd ? dd : this.lastTimestampUs + 1e6 * this.frameDurationS
        })
      }
    }

    function Ed(dd) {
      const Od = new Uint8Array(dd.reduce(((dd, Od) => dd + Od.byteLength), 0));
      let md = 0;
      for (const Wd of dd) Od.set(Wd, md), md += Wd.byteLength;
      return Od
    }
    md(41405);

    function Jd(dd, Od, md, Wd) {
      const Fd = dd / 1e3 + md;
      return {
        startMs: Fd,
        endMs: Fd + Od / 1e3 + 1e3 / Wd
      }
    }
    const Ud = 2,
      xd = 18e5;

    function Bd(dd, Od) {
      const md = Od[Od.length - 1].timestampUs - dd.firstTimestampUs,
        {
          startMs: Wd,
          endMs: Fd
        } = Jd(dd.firstTimestampUs, md, dd.epochOffsetMs, dd.fps);
      return {
        startMs: Math.round(Wd),
        endMs: Math.round(Fd),
        width: dd.width,
        height: dd.height,
        codec: dd.codec
      }
    }
    async function Sd(dd, Od) {
      const md = [],
        Wd = new wd(dd.containerCodec, dd.firstTimestampUs, 1 / dd.fps, Ud, (dd => {
          let {
            bytes: Od
          } = dd;
          md.push(Od)
        }));
      for (const Fd of Od) Wd.addData(Fd.data, Fd.key ? "key" : "delta", Fd.timestampUs, dd.decoderConfig);
      return await Wd.finish(), Ed(md).buffer
    }

    function sd(dd, Od, md) {
      var Wd;
      const Fd = null === (Wd = dd.videoProgress) || void 0 === Wd ? void 0 : Wd.find((dd => dd.segmentId === Od));
      return void 0 !== Fd && (null === md || Fd.partsLanded > md.partsLanded) ? Fd : md
    }
    const ud = 6e5;
    async function Vd(dd, Od) {
      const md = {
        recordingId: Od.recordingId,
        outcome: "nothing",
        videoSegments: 0,
        telemetrySegments: 0,
        domSegments: 0
      };
      if (dd.nowMs() > dd.lateUploadUntilMs(Od) - ud) return {
        ...md,
        outcome: "expired"
      };
      const Wd = new Set;
      let Fd;
      try {
        Fd = await async function(dd, Od, md, Wd) {
          const {
            partJoiner: Fd
          } = Od;
          if (void 0 === Fd) return md;
          const Rd = dd.nowMs() > Od.manifest.endedAtMs + xd,
            Xd = new Map;
          for (const {
              header: hd,
              sequence: vd,
              progress: Qd
            }
            of md.video)
            if (null !== vd && null === sd(Od, hd.segmentId, Qd)) {
              let Od;
              try {
                Od = await dd.releaseJoined(Fd, vd)
              } catch (Kd) {
                if (!Rd) {
                  Wd.add(hd.segmentId);
                  continue
                }
                console.warn(`Session replay's part joiner didn't answer about video segment ${vd} in time; uploading it from the journal.`, Kd), Od = null
              }
              null !== Od && Xd.set(hd.segmentId, Od)
            } return {
            ...md,
            joined: Xd
          }
        }(dd, Od, await dd.store.read(Od), Wd)
      } catch (bd) {
        return console.warn(`Session replay couldn't read what an earlier page load left of ${Od.recordingId}; trying again later.`, bd), {
          ...md,
          outcome: "retryLater"
        }
      }
      const Rd = [],
        Xd = {
          ...Od.manifest,
          videoSegments: [],
          telemetrySegments: [],
          ...Fd.dom.length + Fd.domTails.length > 0 ? {
            domSegments: Rd
          } : {}
        },
        Kd = () => Xd.videoSegments.length + Xd.telemetrySegments.length + Rd.length > 0,
        hd = function(dd, Od) {
          let md = dd.video.reduce(((dd, Od) => {
            let {
              sequence: md
            } = Od;
            return null === md ? dd : Math.max(dd, md + 1)
          }), Od.nextVideoSequence);
          return {
            segments: [...dd.video].sort(((dd, Od) => dd.header.segmentId - Od.header.segmentId)).map((Wd => {
              var Fd, Rd, Xd;
              let {
                header: Kd,
                sequence: hd,
                progress: vd,
                chunks: Qd
              } = Wd;
              const td = sd(Od, Kd.segmentId, vd),
                od = null === (Fd = dd.joined) || void 0 === Fd ? void 0 : Fd.get(Kd.segmentId),
                Nd = null !== hd && void 0 !== od ? {
                  sequence: hd,
                  ...od.meta
                } : null !== hd && null !== td ? {
                  sequence: hd,
                  ...td.meta,
                  startMs: Math.round(td.meta.startMs),
                  endMs: Math.round(td.meta.endMs),
                  parts: td.partsLanded
                } : null,
                qd = null !== (Rd = null !== (Xd = null === od || void 0 === od ? void 0 : od.completeUntilUs) && void 0 !== Xd ? Xd : null === td || void 0 === td ? void 0 : td.completeUntilUs) && void 0 !== Rd ? Rd : null,
                Hd = function(dd) {
                  const Od = [...dd].sort(((dd, Od) => dd.index - Od.index)),
                    md = [];
                  for (const Wd of Od) {
                    if (0 === md.length ? !Wd.key : Wd.index !== md[0].index + md.length) break;
                    md.push(Wd)
                  }
                  return md
                }(null === qd ? Qd : Qd.filter((dd => dd.timestampUs >= qd))),
                yd = 0 === Hd.length ? null : {
                  sequence: md++,
                  header: {
                    ...Kd,
                    firstTimestampUs: Hd[0].timestampUs
                  },
                  chunks: Hd
                };
              return {
                segmentId: Kd.segmentId,
                landed: Nd,
                tail: yd
              }
            })),
            nextSequence: md
          }
        }(Fd, Od),
        vd = function(dd, Od) {
          var md;
          let Wd = dd.dom.reduce(((dd, Od) => {
            let {
              sequence: md
            } = Od;
            return Math.max(dd, md + 1)
          }), null !== (md = Od.nextDomSequence) && void 0 !== md ? md : 0);
          const Fd = [...dd.domTails].sort(((dd, Od) => dd.chunkIndex - Od.chunkIndex || dd.fromChar - Od.fromChar)),
            Rd = [];
          for (const Xd of Fd) {
            const dd = Rd[Rd.length - 1],
              Od = (null === dd || void 0 === dd ? void 0 : dd.chunkIndex) === Xd.chunkIndex;
            Xd.fromChar === (Od ? dd.text.length : 0) && (Od ? (dd.text += Xd.text, dd.last = Xd) : Rd.push({
              chunkIndex: Xd.chunkIndex,
              sequence: Wd++,
              text: Xd.text,
              last: Xd
            }))
          }
          return {
            tails: Rd,
            nextSequence: Wd
          }
        }(Fd, Od),
        Qd = {
          videoSegmentIds: [],
          telemetrySequences: [],
          domSequences: [],
          domTailChunks: []
        };
      let td = !1;
      const od = async Fd => {
        if (Kd()) {
          const Kd = await yd(dd, Od, Xd);
          if ("retryLater" === Fd && "uploaded" === Kd) try {
            var Rd;
            const md = vd.tails.find((dd => {
                let {
                  chunkIndex: Od
                } = dd;
                return !Qd.domTailChunks.includes(Od)
              })),
              Wd = null !== (Rd = null === md || void 0 === md ? void 0 : md.sequence) && void 0 !== Rd ? Rd : vd.nextSequence;
            await dd.store.forgetSent({
              ...Od,
              nextVideoSequence: hd.nextSequence,
              nextDomSequence: Wd
            }, Qd)
          } catch (bd) {
            console.warn(`Session replay couldn't drop what it sent of ${Od.recordingId} from its journal.`, bd)
          }
          if ("refused" === Kd && Wd.size > 0) return {
            ...md,
            outcome: "refused"
          }
        }
        return {
          ...md,
          outcome: Fd
        }
      };
      for (const {
          segmentId: yd,
          landed: Td,
          tail: pd
        }
        of hd.segments)
        if (!Wd.has(yd)) {
          if (null !== Td && Xd.videoSegments.push(Td), null !== pd) {
            const Wd = await Hd(dd, Od, {
              kind: "video",
              sequence: pd.sequence,
              contentType: "video/mp4",
              bytes: () => dd.mux(pd.header, pd.chunks)
            });
            if ("retryLater" === Wd) return await od(Wd);
            "refused" === Wd ? td = !0 : (Xd.videoSegments.push({
              sequence: pd.sequence,
              ...Bd(pd.header, pd.chunks)
            }), md.videoSegments++)
          }
          Qd.videoSegmentIds.push(yd)
        } const Nd = [...Fd.telemetry].sort(((dd, Od) => dd.sequence - Od.sequence));
      for (const yd of Nd) {
        const Wd = yd.landed ? "uploaded" : await Hd(dd, Od, {
          kind: "telemetry",
          sequence: yd.sequence,
          contentType: "application/octet-stream",
          bytes: async () => yd.bytes
        });
        if ("retryLater" === Wd) return await od(Wd);
        Qd.telemetrySequences.push(yd.sequence), "refused" !== Wd ? (Xd.telemetrySegments.push({
          sequence: yd.sequence,
          startMs: Math.round(yd.startMs),
          endMs: Math.round(yd.endMs)
        }), md.telemetrySegments++) : td = !0
      }
      const qd = [...Fd.dom].sort(((dd, Od) => dd.sequence - Od.sequence));
      for (const {
          sequence: yd,
          chunk: Td,
          bytes: pd
        }
        of qd) {
        const Wd = null === pd ? "uploaded" : await Hd(dd, Od, {
          kind: "dom",
          sequence: yd,
          contentType: "application/octet-stream",
          bytes: async () => pd
        });
        if ("retryLater" === Wd) return await od(Wd);
        Qd.domSequences.push(yd), Rd.push({
          sequence: yd,
          ...Td
        }), "uploaded" === Wd && md.domSegments++
      }
      for (const {
          chunkIndex: yd,
          sequence: Td,
          text: pd,
          last: Yd
        }
        of vd.tails) {
        let Wd;
        const Fd = await Hd(dd, Od, {
          kind: "dom",
          sequence: Td,
          contentType: "application/octet-stream",
          bytes: async () => (Wd = await dd.packDom(pd), Wd.bytes.buffer)
        });
        if ("retryLater" === Fd) return await od(Fd);
        if (Qd.domTailChunks.push(yd), "refused" === Fd) {
          td = !0;
          continue
        }
        const {
          bytes: Xd,
          inflatedBytes: Kd
        } = Wd, {
          startMs: hd,
          endMs: vd,
          summary: Nd
        } = Yd;
        Rd.push({
          sequence: Td,
          startMs: hd,
          endMs: vd,
          byteLength: Xd.byteLength,
          summary: {
            ...Nd,
            size: Kd
          }
        }), md.domSegments++
      }
      return Wd.size > 0 ? await od("retryLater") : Kd() ? {
        ...md,
        outcome: await yd(dd, Od, Xd)
      } : td ? {
        ...md,
        outcome: "refused"
      } : md
    }
    var Ad = md(41390),
      rd = md(41419);
    async function Gd() {
      const dd = "undefined" === typeof navigator ? void 0 : navigator.locks;
      if (!od.b.supported || void 0 === dd) return;
      const Od = new od.b,
        md = new Ad.e,
        hd = new Rd.d,
        vd = await async function(dd) {
          const Od = [];
          for (const Wd of await dd.store.listRecordings()) {
            let Fd = {
              recordingId: Wd.recordingId,
              outcome: "live",
              videoSegments: 0,
              telemetrySegments: 0,
              domSegments: 0
            };
            try {
              await dd.withLock(Wd.recordingId, (async () => {
                const Od = (await dd.store.listRecordings()).find((dd => {
                  let {
                    recordingId: Od
                  } = dd;
                  return Od === Wd.recordingId
                }));
                if (void 0 !== Od) {
                  try {
                    Fd = await Vd(dd, Od)
                  } catch (md) {
                    console.warn(`Session replay couldn't recover what an earlier page load left of ${Wd.recordingId}; forgetting it.`, md), Fd = {
                      ...Fd,
                      outcome: "failed"
                    }
                  }
                  "retryLater" !== Fd.outcome && await dd.store.deleteRecording(Wd.recordingId)
                } else Fd = {
                  ...Fd,
                  outcome: "nothing"
                }
              }))
            } catch (md) {
              console.warn(`Session replay couldn't forget ${Wd.recordingId}'s journal.`, md)
            }
            Od.push(Fd)
          }
          return Od
        }({
          store: Od,
          transportFor: dd => {
            var Od;
            return new rd.e((null !== (Od = dd.endpoints) && void 0 !== Od ? Od : (0, Kd.c)()).segmentUploadUrl, {
              relay: md.for(dd)
            })
          },
          postManifest: (dd, Od) => {
            var md;
            return (0, td.d)((null !== (md = dd.endpoints) && void 0 !== md ? md : (0, Kd.c)()).manifestUrl, Od)
          },
          withLock: async (Od, md) => {
            await dd.request((0, Nd.s)(Od), {
              ifAvailable: !0
            }, (async dd => {
              null !== dd && await md()
            }))
          },
          mux: Sd,
          packDom: dd => hd.pack(dd).catch((() => (0, Xd.c)(dd))),
          releaseJoined: Qd,
          nowMs: Date.now,
          lateUploadUntilMs: dd => {
            var Od;
            return null !== (Od = dd.lateUploadUntilMs) && void 0 !== Od ? Od : dd.expiresAtMs + Wd.e
          },
          mayStartUpload: () => !0
        }).finally((() => {
          hd.close()
        }));
      for (const Wd of vd) "live" !== Wd.outcome && console.info(`Session replay: ${Wd.outcome} what an earlier page load left of ${Wd.recordingId} (${Wd.videoSegments} video, ${Wd.telemetrySegments} telemetry, ${Wd.domSegments} page recording).`);
      0 === (await Od.listRecordings()).length && Fd.k.removeItem(Nd.l)
    }
  },
  41551: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
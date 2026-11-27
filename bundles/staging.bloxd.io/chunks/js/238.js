export const id = 238;
export const ids = [238];
export const modules = {
  54056: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      loadGlbAsset: () => OS,
      loadGlbTree: () => vS
    });
    var Zr = Qr(39405),
      Wr = Qr(139),
      ar = Qr(1264);

    function jr(rr) {
      return (0, Wr.isDiscordClient)() ? `https://${ar.c.discordDomain}/${rr.href}` : rr.href
    }
    const Ir = {
      scriptUrl: jr(new Qr.U(Qr(54064))),
      wasmBinaryUrl: jr(new Qr.U(Qr(54071)))
    };
    var fr = Qr(2398),
      Er = Qr(37500),
      pr = Qr.n(Er);

    function xr() {
      return pr()('(()=>{class rr extends Error{}function Sr(Sr,Qr){const Zr=Sr._malloc(Qr);if(0===Zr)throw new rr(`Draco: the decoder\'s heap refused ${Qr} bytes`);return Zr}function Qr(Qr,Zr,Wr,ar){let jr=null,Ir=null,fr=null;try{jr=new Qr.Decoder,Ir=new Qr.DecoderBuffer,Ir.Init(Zr,Zr.byteLength);let Er=0;const pr=jr.GetEncodedGeometryType(Ir);if(pr===Qr.TRIANGULAR_MESH){const Sr=new Qr.Mesh;fr=Sr;const Zr=jr.DecodeBufferToMesh(Ir,Sr);if(!Zr.ok()||0===Sr.ptr)throw new rr(Zr.error_msg());Er=3*Sr.num_faces()}else{if(pr!==Qr.POINT_CLOUD)throw new rr(`Draco: Cannot decode invalid geometry type ${pr}`);{const Sr=new Qr.PointCloud;fr=Sr;const Zr=jr.DecodeBufferToPointCloud(Ir,Sr);if(!Zr.ok()||!Sr.ptr)throw new rr(Zr.error_msg())}}const xr=fr.num_points();if(xr!==ar.vertices||Er!==ar.indices)throw new rr(`Draco: decoded ${xr} vertices and ${Er} indices, the accessors declare ${ar.vertices} and ${ar.indices}`);const mr=function(rr){return{[rr.DT_FLOAT32]:Float32Array,[rr.DT_INT8]:Int8Array,[rr.DT_INT16]:Int16Array,[rr.DT_INT32]:Int32Array,[rr.DT_UINT8]:Uint8Array,[rr.DT_UINT16]:Uint16Array,[rr.DT_UINT32]:Uint32Array}}(Qr),Nr=[];for(const Sr of Object.keys(Wr)){const Qr=Wr[Sr],Zr=ar.components[Sr],Ir=jr.GetAttributeByUniqueId(fr,Qr);if(!Ir||0===Ir.ptr)throw new rr(`Draco: no attribute with id ${Qr} (${Sr})`);const Er=Ir.data_type();if(!mr[Er])throw new rr(`Draco: Cannot decode invalid data type ${Er}`);if(Ir.num_components()!==Zr)throw new rr(`Draco: ${Sr} decodes to ${Ir.num_components()} components, its accessor declares ${Zr}`);Nr.push([Sr,Ir,mr[Er]])}let Ur=null;if(pr===Qr.TRIANGULAR_MESH){const rr=4*Er,Zr=Sr(Qr,rr);try{jr.GetTrianglesUInt32Array(fr,rr,Zr),Ur=new Uint32Array(Er),Ur.set(new Uint32Array(Qr.HEAPF32.buffer,Zr,Er))}finally{Qr._free(Zr)}}const tr=[];for(const[rr,Zr,Wr]of Nr){const ar=Zr.num_components(),Ir=xr*ar,Er=Ir*Wr.BYTES_PER_ELEMENT,pr=Sr(Qr,Er);try{jr.GetAttributeDataArrayForAllPoints(fr,Zr,Zr.data_type(),Er,pr),tr.push({kind:rr,data:new Wr(Qr.HEAPF32.buffer,pr,Ir).slice(),size:ar,byteOffset:Zr.byte_offset(),byteStride:Zr.byte_stride(),normalized:Zr.normalized()})}finally{Qr._free(pr)}}return{indices:Ur,attributes:tr,totalVertices:xr}}finally{fr&&Qr.destroy(fr),Ir&&Qr.destroy(Ir),jr&&Qr.destroy(jr)}}const Zr=self;let Wr=null;self.onmessage=rr=>{let{data:Sr}=rr;if("init"===Sr.id){try{importScripts(Sr.url),Wr=DracoDecoderModule({wasmBinary:Sr.wasmBinary}),Zr.postMessage({id:"initDone"})}catch(Er){Zr.postMessage({id:"initError",message:Er instanceof Error?Er.message:String(Er)})}return}const{seq:ar,data:jr,attributeIds:Ir,expected:fr}=Sr;Wr?Wr.then((rr=>{try{const Sr=Qr(rr,jr,Ir,fr),Wr=Sr.attributes.map((rr=>rr.data.buffer));Sr.indices&&Wr.push(Sr.indices.buffer),Zr.postMessage({id:"decoded",seq:ar,...Sr},Wr)}catch(Er){Zr.postMessage({id:"decodeError",seq:ar,message:Er instanceof Error?Er.message:String(Er)})}}),(rr=>{Zr.postMessage({id:"decodeError",seq:ar,message:rr instanceof Error?rr.message:String(rr)})})):Zr.postMessage({id:"decodeError",seq:ar,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, Qr.p + "dracoDecode.worker.a4104937.worker.js")
    }
    var mr = Qr(109),
      Nr = Qr(5116),
      Ur = Qr(335);
    const tr = 2;
    const hr = 1e3;
    let zr = null,
      Yr = null;
    const nr = [],
      er = [];
    let Kr = 0;
    const yr = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };
    let Br = null;

    function Tr() {
      if (!zr) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: rr,
        wasmBinaryUrl: Sr
      } = zr;
      return Yr ??= (0, fr.K)(Sr), Yr.catch((() => {
        Yr = null
      })), yr.workersStarted++, Promise.all([Yr, (0, Ur.p)()]).then((Sr => {
        let [Qr] = Sr;
        return new Promise(((Sr, Zr) => {
          const Wr = new xr;
          Wr.onerror = rr => {
            Wr.onmessage = null, Wr.onerror = null, Wr.terminate(), Zr(new Error("Draco: the decode worker failed to start" + (rr.message ? `: ${rr.message}` : " (its script did not load)")))
          }, Wr.onmessage = rr => {
            let {
              data: Qr
            } = rr;
            Wr.onmessage = null, Wr.onerror = null, "initDone" === Qr.id ? Sr(Wr) : (Wr.terminate(), Zr(new Error(`Draco: ${"initError"===Qr.id?Qr.message:"the worker did not start"}`)))
          };
          const ar = Qr.slice().buffer,
            jr = {
              id: "init",
              url: rr,
              wasmBinary: ar
            };
          Wr.postMessage(jr, [ar])
        }))
      }))
    }

    function vr(rr) {
      const Sr = nr.indexOf(rr); - 1 !== Sr && nr.splice(Sr, 1);
      const Qr = er.shift();
      Qr && Lr(Qr)
    }

    function Or(rr, Sr) {
      rr.busy = !0, rr.releaseTimer && (clearTimeout(rr.releaseTimer), rr.releaseTimer = null);
      rr.worker.then((Qr => {
        const Zr = Kr++;
        Qr.onmessage = Wr => {
          let {
            data: ar
          } = Wr;
          if (("decoded" === ar.id || "decodeError" === ar.id) && ar.seq === Zr) {
            if (Qr.onmessage = null, Qr.onerror = null, "decoded" === ar.id) return yr.decodes++, Sr.resolve({
              indices: ar.indices,
              attributes: ar.attributes,
              totalVertices: ar.totalVertices
            }), void(() => {
              const Sr = er.shift();
              Sr ? Or(rr, Sr) : (rr.busy = !1, rr.releaseTimer = setTimeout((() => {
                const Sr = nr.indexOf(rr); - 1 !== Sr && nr.splice(Sr, 1), rr.worker.then((rr => {
                  rr.terminate()
                }))
              }), hr))
            })();
            Qr.terminate(), Sr.reject(new Error(ar.message)), vr(rr)
          }
        }, Qr.onerror = Zr => {
          Qr.onmessage = null, Qr.onerror = null, Qr.terminate(), Sr.reject(new Error(`Draco: the decode worker failed: ${Zr.message}`)), vr(rr)
        };
        const Wr = {
          id: "decode",
          seq: Zr,
          data: Sr.data,
          attributeIds: Sr.attributeIds,
          expected: Sr.expected
        };
        Qr.postMessage(Wr, [Sr.data.buffer])
      }), (Qr => {
        Sr.reject(Qr instanceof Error ? Qr : new Error(String(Qr))), vr(rr)
      }))
    }

    function Lr(rr) {
      const Sr = nr.find((rr => !rr.busy));
      if (Sr) Or(Sr, rr);
      else {
        if (Br ??= (0, Nr.f)() ? 1 : function(rr, Sr) {
            const Qr = rr ? Math.max(1, Math.min(Math.floor(.5 * rr), 4)) : 1;
            return Sr ? Math.min(Qr, tr) : Qr
          }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, mr.isMobile)()), nr.length < Br) {
          const Sr = {
            worker: Tr(),
            busy: !0,
            releaseTimer: null
          };
          return nr.push(Sr), yr.mostWorkers = Math.max(yr.mostWorkers, nr.length), void Or(Sr, rr)
        }
        er.push(rr)
      }
    }

    function lr(rr, Sr, Qr) {
      return new Promise(((Zr, Wr) => {
        Lr({
          data: new Int8Array(rr.buffer, rr.byteOffset, rr.byteLength).slice(),
          attributeIds: Sr,
          expected: Qr,
          resolve: Zr,
          reject: Wr
        })
      }))
    }
    var Xr = Qr(38869),
      Pr = Qr(38879),
      Hr = Qr(35580),
      qr = Qr(35576);
    const Rr = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function gr(rr) {
      const Sr = (0, qr.m)(rr.byteLength);
      if (Sr) throw new Hr.o(Sr);
      const {
        json: Qr,
        bin: Zr
      } = (0, Hr.z)(rr), Wr = (0, qr.i)(Qr, Zr);
      if (Wr) throw new Hr.o(Wr);
      try {
        return function(rr, Sr) {
          var Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr;
          const zr = new Map,
            Yr = Qr => {
              let Zr = zr.get(Qr);
              if (!Zr) {
                var Wr;
                const ar = rr.bufferViews[Qr],
                  jr = null !== (Wr = ar.byteOffset) && void 0 !== Wr ? Wr : 0;
                Zr = {
                  index: Qr,
                  bytes: Sr.subarray(jr, jr + ar.byteLength),
                  byteStride: ar.byteStride
                }, zr.set(Qr, Zr)
              }
              return Zr
            },
            nr = new Map,
            er = Sr => {
              let Qr = nr.get(Sr);
              if (!Qr) {
                var Zr;
                const Wr = rr.accessors[Sr];
                Qr = {
                  index: Sr,
                  count: Wr.count,
                  type: Wr.type,
                  numComponents: Hr.p[Wr.type],
                  componentType: Wr.componentType,
                  normalized: null !== (Zr = Wr.normalized) && void 0 !== Zr && Zr,
                  byteOffset: Wr.byteOffset,
                  bufferView: void 0 === Wr.bufferView ? null : Yr(Wr.bufferView),
                  min: Wr.min,
                  max: Wr.max
                }, nr.set(Sr, Qr)
              }
              return Qr
            },
            Kr = null !== (Qr = null === (Zr = rr.extensionsUsed) || void 0 === Zr ? void 0 : Zr.includes("KHR_draco_mesh_compression")) && void 0 !== Qr && Qr,
            yr = (null !== (Wr = rr.meshes) && void 0 !== Wr ? Wr : []).map(((Sr, Qr) => {
              const Zr = Sr.primitives.map(((Sr, Qr) => {
                var Zr, Wr, ar;
                const jr = Kr ? null === (Zr = Sr.extensions) || void 0 === Zr ? void 0 : Zr.KHR_draco_mesh_compression : void 0;
                let Ir = null;
                const fr = [];
                if (jr) {
                  const Qr = {
                    vertices: rr.accessors[Sr.attributes.POSITION].count,
                    indices: void 0 === Sr.indices ? 0 : rr.accessors[Sr.indices].count,
                    components: {}
                  };
                  Ir = {
                    bufferView: Yr(jr.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: Qr
                  };
                  for (const [Zr, Wr] of Hr.j) {
                    const ar = jr.attributes[Zr];
                    if (void 0 === ar) continue;
                    Ir.attributeIds[Wr] = ar;
                    const fr = Sr.attributes[Zr];
                    var Er;
                    if (void 0 !== fr) Ir.normalized[Wr] = null !== (Er = rr.accessors[fr].normalized) && void 0 !== Er && Er, Qr.components[Wr] = Hr.p[rr.accessors[fr].type]
                  }
                } else
                  for (const [rr, pr] of Hr.j) {
                    const Qr = Sr.attributes[rr];
                    void 0 !== Qr && fr.push({
                      semantic: rr,
                      kind: pr,
                      accessor: er(Qr)
                    })
                  }
                return {
                  index: Qr,
                  mode: null !== (Wr = Sr.mode) && void 0 !== Wr ? Wr : 4,
                  attributes: fr,
                  indices: jr || void 0 === Sr.indices ? null : er(Sr.indices),
                  position: void 0 === Sr.attributes.POSITION ? null : er(Sr.attributes.POSITION),
                  material: null !== (ar = Sr.material) && void 0 !== ar ? ar : null,
                  draco: Ir
                }
              }));
              return {
                index: Qr,
                name: Sr.name,
                primitives: Zr,
                extras: Sr.extras
              }
            })),
            Br = (null !== (ar = rr.nodes) && void 0 !== ar ? ar : []).map(((rr, Sr) => {
              var Qr, Zr;
              return {
                index: Sr,
                name: rr.name,
                children: null !== (Qr = rr.children) && void 0 !== Qr ? Qr : [],
                mesh: null !== (Zr = rr.mesh) && void 0 !== Zr ? Zr : null,
                translation: rr.translation,
                rotation: rr.rotation,
                scale: rr.scale,
                hasCamera: void 0 !== rr.camera,
                extras: rr.extras
              }
            })),
            Tr = null !== (jr = null === (Ir = rr.extensionsUsed) || void 0 === Ir ? void 0 : Ir.includes("KHR_materials_unlit")) && void 0 !== jr && jr,
            vr = null !== (fr = null === (Er = rr.extensionsUsed) || void 0 === Er ? void 0 : Er.includes("KHR_texture_transform")) && void 0 !== fr && fr,
            Or = (null !== (pr = rr.materials) && void 0 !== pr ? pr : []).map(((rr, Sr) => {
              var Qr, Zr, Wr, ar;
              const jr = rr.pbrMetallicRoughness,
                Ir = null === jr || void 0 === jr ? void 0 : jr.baseColorTexture;
              return {
                index: Sr,
                name: rr.name,
                extras: rr.extras,
                unlit: Tr && void 0 !== (null === (Qr = rr.extensions) || void 0 === Qr ? void 0 : Qr.KHR_materials_unlit),
                pbr: jr ? {
                  baseColorFactor: jr.baseColorFactor,
                  metallicFactor: jr.metallicFactor,
                  roughnessFactor: jr.roughnessFactor
                } : null,
                baseColorTexture: Ir ? {
                  texture: Ir.index,
                  transform: vr && (null === (Zr = Ir.extensions) || void 0 === Zr ? void 0 : Zr.KHR_texture_transform) || null
                } : null,
                emissiveFactor: rr.emissiveFactor,
                alphaMode: null !== (Wr = rr.alphaMode) && void 0 !== Wr ? Wr : "OPAQUE",
                alphaCutoff: rr.alphaCutoff,
                doubleSided: null !== (ar = rr.doubleSided) && void 0 !== ar && ar
              }
            })),
            Lr = (null !== (xr = rr.textures) && void 0 !== xr ? xr : []).map(((Sr, Qr) => {
              var Zr, Wr;
              const ar = void 0 === Sr.sampler ? Rr : {
                index: Sr.sampler,
                ...null === (Zr = rr.samplers) || void 0 === Zr ? void 0 : Zr[Sr.sampler]
              };
              return {
                index: Qr,
                sampler: {
                  index: ar.index,
                  magFilter: ar.magFilter,
                  minFilter: ar.minFilter,
                  wrapS: ar.wrapS,
                  wrapT: ar.wrapT
                },
                image: null !== (Wr = Sr.source) && void 0 !== Wr ? Wr : -1
              }
            })),
            lr = (null !== (mr = rr.images) && void 0 !== mr ? mr : []).map(((rr, Sr) => ({
              index: Sr,
              name: rr.name,
              mimeType: rr.mimeType,
              bufferView: Yr(rr.bufferView)
            }))),
            Xr = null !== (Nr = (0, Hr.y)(rr)) && void 0 !== Nr ? Nr : 0;
          return {
            json: rr,
            rootNodes: null !== (Ur = null === (tr = rr.scenes) || void 0 === tr || null === (hr = tr[Xr]) || void 0 === hr ? void 0 : hr.nodes) && void 0 !== Ur ? Ur : [],
            nodes: Br,
            meshes: yr,
            materials: Or,
            textures: Lr,
            images: lr
          }
        }(Qr, Zr)
      } catch (ar) {
        throw ar instanceof Hr.m ? ar : new Hr.m(`reading the GLB failed: ${ar instanceof Error?ar.message:String(ar)}`)
      }
    }
    async function Cr(rr, Sr) {
      var Qr, Zr;
      const Wr = rr.draco;
      if (!Wr) throw new Hr.m("not a Draco primitive");
      let ar;
      try {
        ar = await Sr(Wr.bufferView.bytes, Wr.attributeIds, Wr.expected)
      } catch (Er) {
        throw new Hr.m(`Draco decoding failed: ${Er instanceof Error?Er.message:String(Er)}`)
      }
      const {
        vertices: jr,
        indices: Ir,
        components: fr
      } = Wr.expected;
      if (ar.totalVertices !== jr || (null !== (Qr = null === (Zr = ar.indices) || void 0 === Zr ? void 0 : Zr.length) && void 0 !== Qr ? Qr : 0) !== Ir || ar.attributes.some((rr => rr.size !== fr[rr.kind] || rr.data.length !== jr * rr.size))) throw new Hr.m("Draco decoding gave other counts than the accessors declare");
      for (const pr of ar.attributes) {
        const rr = Wr.normalized[pr.kind];
        void 0 !== rr && (pr.normalized = rr)
      }
      return ar
    }
    const Mr = new WeakMap;

    function Gr(rr, Sr) {
      var Qr;
      const Zr = null !== (Qr = Mr.get(rr)) && void 0 !== Qr ? Qr : Sr(rr);
      return Mr.set(rr, Zr), Zr
    }

    function kr(rr) {
      const Sr = rr.bufferView,
        Qr = 5125 === rr.componentType ? Uint32Array : Uint16Array,
        Zr = Sr.bytes.buffer,
        Wr = Sr.bytes.byteOffset + (rr.byteOffset || 0);
      return Wr % Qr.BYTES_PER_ELEMENT !== 0 ? new Qr(Zr.slice(Wr, Wr + rr.count * Qr.BYTES_PER_ELEMENT), 0) : new Qr(Zr, Wr, rr.count)
    }

    function Ar(rr, Sr) {
      if (rr.min && rr.max) return [new Float64Array(rr.min), new Float64Array(rr.max)];
      const Qr = Sr.find((rr => {
          let {
            kind: Sr
          } = rr;
          return "position" === Sr
        })),
        Zr = Qr ? (0, Pr.g)(Qr, rr.count) : new Float32Array(0);
      return (0, Pr.n)(Zr.length / 3, ((rr, Sr) => Zr[3 * rr + Sr]))
    }

    function Vr(rr) {
      const Sr = rr.attributes.map((rr => {
          var Sr, Qr;
          let {
            kind: Zr,
            accessor: Wr
          } = rr;
          const {
            bufferView: ar,
            numComponents: jr
          } = Wr;
          if (!ar) {
            return {
              kind: Zr,
              data: Gr(Wr, (() => new Float32Array(jr * Wr.count))),
              offset: 0,
              stride: 4 * jr,
              components: jr,
              glType: 5126,
              isNormalized: !1
            }
          }
          const Ir = null !== (Sr = ar.byteStride) && void 0 !== Sr ? Sr : jr * Hr.d[Wr.componentType];
          return {
            kind: Zr,
            data: ar.bytes,
            offset: null !== (Qr = Wr.byteOffset) && void 0 !== Qr ? Qr : 0,
            stride: Ir,
            components: jr,
            glType: Wr.componentType,
            isNormalized: Wr.normalized
          }
        })),
        Qr = rr.indices,
        Zr = Qr && Gr(Qr, kr),
        Wr = rr.position;
      return new Pr.f(Sr, Zr, Wr.count, ...Ar(Wr, Sr))
    }
    const ir = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function wr(rr, Sr) {
      const Qr = Sr.attributes.map((rr => {
        let {
          kind: Sr,
          data: Qr,
          size: Zr,
          byteOffset: Wr,
          byteStride: ar,
          normalized: jr
        } = rr;
        return {
          kind: Sr,
          data: Qr,
          offset: Wr,
          stride: ar,
          components: Zr,
          glType: 5120 + ir.indexOf(Qr.constructor),
          isNormalized: jr
        }
      }));
      return new Pr.f(Qr, Sr.indices, Sr.totalVertices, ...Ar(rr.position, Qr))
    }

    function cr(rr) {
      const Sr = rr.lastIndexOf("/");
      return Sr < 0 ? rr : rr.substring(Sr + 1)
    }

    function Fr(rr) {
      const Sr = rr.lastIndexOf("/");
      return Sr < 0 ? "" : rr.substring(0, Sr + 1)
    }

    function or(rr) {
      return rr.name || `node${rr.index}`
    }
    const br = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      Jr = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      Dr = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function dr(rr) {
      var Sr, Qr, Zr, Wr;
      const ar = null !== (Sr = rr.minFilter) && void 0 !== Sr ? Sr : 9987;
      return 9729 === (null !== (Qr = rr.magFilter) && void 0 !== Qr ? Qr : 9729) ? null !== (Zr = Jr[ar]) && void 0 !== Zr ? Zr : 3 : null !== (Wr = Dr[ar]) && void 0 !== Wr ? Wr : 4
    }
    const sr = {
      33071: 0,
      33648: 2
    };

    function ur(rr) {
      var Sr;
      return null !== (Sr = sr[null !== rr && void 0 !== rr ? rr : 10497]) && void 0 !== Sr ? Sr : 1
    }

    function rS(rr) {
      return 9728 === rr.minFilter || 9729 === rr.minFilter
    }

    function SS(rr) {
      var Sr, Qr, Zr;
      const Wr = Float64Array.from(null !== (Sr = rr.scale) && void 0 !== Sr ? Sr : [1, 1, 1]);
      return rr.hasCamera && (Wr[0] = -1), {
        translation: Float64Array.from(null !== (Qr = rr.translation) && void 0 !== Qr ? Qr : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Zr = rr.rotation) && void 0 !== Zr ? Zr : [0, 0, 0, 1]),
        scale: Wr
      }
    }

    function QS(rr, Sr) {
      let {
        translation: Qr,
        rotation: Zr,
        scale: Wr
      } = rr;
      const ar = new Float32Array(16);
      return (0, Xr.c)(Wr, 0, Zr, 0, Qr, 0, ar), Sr && (0, Xr.l)(ar, Sr, 0, ar), ar
    }
    class ZS {
      constructor(rr, Sr, Qr, Zr) {
        this.model = rr, this.decode = Sr, this.fileInfo = Qr, this.uniqueRootUrl = Zr, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Wr = new Set,
          ar = (Sr, Qr) => {
            const Zr = rr.nodes[Sr];
            if (this.parents.has(Zr)) throw new Hr.m(`/nodes/${Sr}: Invalid recursive node hierarchy`);
            this.parents.set(Zr, Qr);
            const jr = null === Zr.mesh ? [] : rr.meshes[Zr.mesh].primitives,
              Ir = jr.map((rr => {
                const Sr = jr.length > 1;
                return {
                  name: Sr ? `${or(Zr)}_primitive${rr.index}` : or(Zr),
                  node: Zr,
                  primitive: rr,
                  part: Sr,
                  geometry: null
                }
              }));
            this.uses.set(Zr, Ir);
            const fr = null !== Zr.mesh && Wr.has(Zr.mesh);
            Wr.add(Zr.mesh), this.own.set(Zr, fr ? [] : Ir);
            for (const rr of Zr.children) ar(rr, Zr)
          };
        for (const jr of rr.rootNodes) ar(jr, null);
        this.primitives = rr.nodes.flatMap((rr => {
          var Sr;
          return null !== (Sr = this.own.get(rr)) && void 0 !== Sr ? Sr : []
        }))
      }
      decodeGeometries() {
        const rr = new Map;
        return Promise.all(this.primitives.map((async Sr => {
          const {
            primitive: Qr
          } = Sr, Zr = Qr.draco;
          let Wr = Zr ? rr.get(Zr.bufferView.index) : Promise.resolve(Vr(Qr));
          Wr || (Wr = Cr(Qr, this.decode).then((rr => wr(Qr, rr))), rr.set(Zr.bufferView.index, Wr)), Sr.geometry = await Wr
        })))
      }
      parentOf(rr) {
        var Sr;
        return null !== (Sr = this.parents.get(rr)) && void 0 !== Sr ? Sr : null
      }
      meshesUnder(rr) {
        const Sr = this.model.nodes.filter((rr => this.uses.has(rr)));
        for (const Zr of Sr) {
          const Sr = this.uses.get(Zr),
            Qr = Sr.find((Sr => Sr.name === rr));
          if (Qr) return 1 === Sr.length ? this.subtree(Zr) : this.own.get(Zr).includes(Qr) ? [Qr] : []
        }
        const Qr = Sr.find((Sr => 1 !== this.uses.get(Sr).length && or(Sr) === rr));
        return Qr ? this.subtree(Qr) : null
      }
      subtree(rr) {
        return [...this.own.get(rr), ...rr.children.flatMap((rr => this.subtree(this.model.nodes[rr])))]
      }
      worldMatrix(rr, Sr, Qr) {
        let Zr = QS(SS(Sr ? br : {}), null);
        const Wr = [];
        for (let jr = rr.part ? rr.node : this.parentOf(rr.node); jr; jr = this.parentOf(jr)) Wr.unshift(jr);
        for (const jr of Wr) Zr = QS(SS(jr), Zr);
        const ar = SS(rr.part ? {} : rr.node);
        return void 0 !== Qr && ar.scale.fill(Qr), QS(ar, Zr)
      }
      floats(rr) {
        const {
          vertexAttributes: Sr,
          vertexCount: Qr
        } = rr.geometry;
        return new Map(Sr.map((rr => [rr.kind, (0, Pr.g)(rr, Qr)])))
      }
      imageUrl(rr) {
        return function(rr, Sr, Qr) {
          let {
            name: Zr
          } = Sr;
          return `data:${rr}${Zr}#image${Qr}`
        }(this.uniqueRootUrl, this.fileInfo, rr)
      }
      textureDesc(rr, Sr) {
        var Qr;
        let {
          texture: Zr,
          transform: Wr
        } = rr;
        const {
          sampler: ar,
          image: jr
        } = this.model.textures[Zr], {
          bufferView: Ir,
          mimeType: fr,
          name: Er
        } = this.model.images[jr], pr = Wr && {
          ...Wr.offset ? {
            uOffset: Wr.offset[0],
            vOffset: Wr.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Wr.rotation ? {
            wAng: -Wr.rotation
          } : {},
          ...Wr.scale ? {
            uScale: Wr.scale[0],
            vScale: Wr.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(jr),
          noMipmap: rS(ar),
          invertY: !1,
          samplingMode: dr(ar),
          data: {
            bytes: Ir.bytes,
            mimeType: fr,
            label: Er,
            context: `/textures/${Zr}`
          },
          sets: {
            wrapU: ur(ar.wrapS),
            wrapV: ur(ar.wrapT),
            ...pr,
            coordinatesIndex: null !== (Qr = null === Wr || void 0 === Wr ? void 0 : Wr.texCoord) && void 0 !== Qr ? Qr : 0,
            hasAlpha: Sr
          }
        }
      }
    }
    async function WS(rr, Sr, Qr, Zr, Wr, ar) {
      let jr = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const Ir = function(rr, Sr, Qr) {
          return "string" !== typeof Sr ? {
            url: "",
            rootUrl: rr,
            name: Qr()
          } : Sr ? Sr.startsWith("data:") ? {
            url: Sr,
            rootUrl: rr,
            name: ""
          } : rr ? {
            url: rr + Sr,
            rootUrl: rr,
            name: Sr
          } : {
            url: Sr,
            rootUrl: Fr(Sr),
            name: cr(Sr)
          } : {
            url: rr,
            rootUrl: Fr(rr),
            name: cr(rr)
          }
        }(Qr, rr, Wr),
        fr = {};
      Sr.addPendingData(fr);
      try {
        const Qr = gr(await async function(rr, Sr) {
            return "string" !== typeof Sr ? Sr : rr.url.startsWith("data:") ? (0, Hr.t)(rr.url) : await (0, Hr.v)(rr.url)
          }(Ir, rr)),
          fr = new ZS(Qr, Zr, Ir, function(rr, Sr) {
            let {
              rootUrl: Qr,
              name: Zr
            } = rr;
            return !Qr.startsWith("file:") && Zr ? Qr : `${Qr}${Sr()}/`
          }(Ir, Wr));
        return await ar(fr), Sr.importedMeshesFiles && (Sr.loadingPluginName = "bR", jr && Sr.importedMeshesFiles.push(Ir.url)), fr
      } finally {
        Sr.removePendingData(fr)
      }
    }
    var aS = Qr(39002),
      jS = Qr(38845),
      IS = Qr(39394);

    function fS(rr) {
      if (null === rr || void 0 === rr || !rr.min || !rr.max) return null;
      const [Sr, Qr, Zr] = rr.min, [Wr, ar, jr] = rr.max, {
        BoundingInfo: Ir,
        kU: fr
      } = (0, aS.c)();
      return new Ir(new fr(Sr, Qr, Zr), new fr(Wr, ar, jr))
    }

    function ES(rr) {
      (0, jS.c)(rr) || (rr.geometry && rr.geometry.useBoundingInfoFromGeometry ? rr._updateBoundingInfo() : rr.refreshBoundingInfo(!0, !0))
    }
    class pS {
      constructor(rr, Sr) {
        this.Dt = rr, this.decode = Sr, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(rr) {
        let Sr = this.viewData.get(rr.index);
        return Sr || (Sr = this.bufferData.then((() => rr.bytes)), this.viewData.set(rr.index, Sr)), Sr
      }
      viewBuffer(rr) {
        let Sr = this.viewBuffers.get(rr.index);
        return Sr || (Sr = this.viewBytes(rr).then((rr => new((0, aS.c)().Dp)(this.Dt.MU(), rr, !1))), this.viewBuffers.set(rr.index, Sr)), Sr
      }
      vertexBuffer(rr, Sr) {
        const {
          kind: Qr,
          data: Zr
        } = Sr, Wr = `${rr.index}:${Qr}`;
        let ar = this.vertexBuffers.get(Wr);
        if (!ar) {
          const jr = rr.bufferView;
          ar = jr ? this.viewBuffer(jr).then((rr => this.layoutVertexBuffer(rr, Sr))) : Promise.resolve(Zr).then((rr => new((0, aS.c)().VertexBuffer)(this.Dt.MU(), rr, Qr, !1))), this.vertexBuffers.set(Wr, ar)
        }
        return ar
      }
      layoutVertexBuffer(rr, Sr) {
        let {
          kind: Qr,
          offset: Zr,
          stride: Wr,
          components: ar,
          glType: jr,
          isNormalized: Ir
        } = Sr;
        const fr = this.Dt.MU();
        return new((0, aS.c)().VertexBuffer)(fr, rr, Qr, !1, void 0, Wr, void 0, Zr, ar, jr, Ir, !0, void 0, !0)
      }
      load(rr, Sr, Qr) {
        const Zr = (0, jS.c)(Qr),
          Wr = rr => {
            Zr || (Qr._delayInfo = Qr._delayInfo || [], -1 === Qr._delayInfo.indexOf(rr) && Qr._delayInfo.push(rr))
          },
          ar = Sr.draco;
        if (ar) {
          for (const rr in ar.attributeIds) Wr(rr);
          let jr = this.dracoGeometry.get(ar.bufferView.index);
          return jr || (jr = this.viewBytes(ar.bufferView).then((async () => {
            let Wr;
            try {
              Wr = await Cr(Sr, this.decode)
            } catch (fr) {
              throw new Hr.m(`${rr}: ${fr instanceof Error?fr.message:String(fr)}`)
            }
            const ar = wr(Sr, Wr);
            if (Zr) return ar;
            const jr = fS(Sr.position),
              Ir = new((0, aS.c)().MirroredGeometry)(Qr.name, this.Dt);
            jr && (Ir._boundingInfo = jr, Ir.useBoundingInfoFromGeometry = !0), ar.indexData && Ir.setIndices(ar.indexData);
            for (const rr of ar.vertexAttributes) Ir.setVerticesBuffer(this.layoutVertexBuffer(rr.data, rr), ar.vertexCount);
            return Ir.link(ar), Ir
          })), this.dracoGeometry.set(ar.bufferView.index, jr)), jr
        }
        const jr = [],
          Ir = Vr(Sr);
        if (Zr) return Qr.isUnIndexed = !Ir.indexData, Qr.hasVertexAlpha = (0, IS.g)(Sr), Promise.resolve(Ir);
        const fr = new((0, aS.c)().MirroredGeometry)(Qr.name, this.Dt),
          {
            indexData: Er
          } = Ir;
        Er ? jr.push(this.viewBytes(Sr.indices.bufferView).then((() => {
          fr.setIndices(Er)
        }))) : Qr.isUnIndexed = !0;
        for (const [pr, {
            kind: xr,
            accessor: mr
          }] of Sr.attributes.entries()) Wr(xr), jr.push(this.vertexBuffer(mr, Ir.vertexAttributes[pr]).then((rr => {
          if ("position" === rr.getKind()) {
            const rr = fS(mr);
            rr && (fr._boundingInfo = rr, fr.useBoundingInfoFromGeometry = !0)
          }
          fr.setVerticesBuffer(rr, Ir.vertexCount)
        })));
        return (0, IS.g)(Sr) && (Qr.hasVertexAlpha = !0), Promise.all(jr).then((() => (fr.link(Ir), fr)))
      }
    }
    var xS, mS = Qr(38782),
      NS = Qr(38555),
      US = Qr(39402),
      tS = Qr(38677),
      hS = Qr(38762),
      zS = Qr(2383),
      YS = Qr(38723);

    function nS(rr, Sr) {
      rr.metadata = rr.metadata || {};
      const Qr = rr._internalMetadata = rr._internalMetadata || {},
        Zr = Qr.bR = Qr.bR || {};
      (Zr.pointers = Zr.pointers || []).push(Sr)
    }

    function eS(rr, Sr) {
      if (Sr && Object.keys(Sr).length > 0) {
        const Qr = rr.metadata = rr.metadata || {};
        (Qr.bR = Qr.bR || {}).extras = Sr
      }
    }

    function KS(rr, Sr) {
      Sr.position = rr.translation ? NS.kU.FromArray(rr.translation) : NS.kU.Zero(), Sr.rotationQuaternion = rr.rotation ? NS.Quaternion.FromArray(rr.rotation) : NS.Quaternion.Identity(), Sr.Tx = rr.scale ? NS.kU.FromArray(rr.scale) : NS.kU.One()
    }
    class yS {
      constructor(rr, Sr) {
        if (this.Dt = rr, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, Sr) {
          const Sr = rr.MU(),
            Qr = rr.lC.add((() => {
              this.dispose()
            })),
            Zr = Sr.CU.add((() => {
              for (const rr of [...this.geometries, ...this.meshes, ...this.textures]) rr._rebuild()
            }));
          this.release = () => {
            rr.lC.remove(Qr), Sr.CU.remove(Zr)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const rr of this.meshes) this.Dt.XWr(rr);
          for (const rr of this.materials) this.Dt.addMaterial(rr);
          for (const rr of this.geometries) this.Dt.addGeometry(rr);
          for (const rr of this.transformNodes) this.Dt.addTransformNode(rr);
          for (const rr of this.textures) this.Dt.addTexture(rr)
        }
      }
      dispose() {
        var rr;
        for (const Sr of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const rr of Sr.slice()) rr.dispose();
          Sr.length = 0
        }
        null === (rr = this.release) || void 0 === rr || rr.call(this), this.release = null
      }
    }
    class BS {
      constructor(rr, Sr, Qr, Zr, Wr, ar, jr) {
        this.asset = rr, this.Dt = Sr, this.tree = Qr, this.geometryData = Wr, this.materials = ar, this.lite = jr, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Zr ? Qr : null
      }
      create(rr) {
        if (this.lite) return rr();
        const Sr = this.Dt;
        Sr._blockEntityCollection = !!this.container;
        try {
          const Sr = rr();
          return this.container && (Sr._parentContainer = this.container), Sr
        } finally {
          Sr._blockEntityCollection = !1
        }
      }
      node(rr, Sr) {
        return this.create((() => this.lite ? Sr ? (0, US.g)(this.lite, rr) : (0, US.t)(this.lite, rr) : Sr ? new((0, aS.c)().Mesh)(rr, this.Dt) : new((0, aS.c)().TransformNode)(rr, this.Dt)))
      }
      async load() {
        var rr;
        this.asset.model.json.nodes && this.createRoot();
        const Sr = this.lite ? null : this.Dt,
          Qr = null !== (rr = null === Sr || void 0 === Sr ? void 0 : Sr.blockMaterialDirtyMechanism) && void 0 !== rr && rr;
        let Zr;
        Sr && (Sr.blockMaterialDirtyMechanism = !0);
        try {
          Zr = this.loadScene()
        } finally {
          null === Sr || void 0 === Sr || Sr._forceBlockMaterialDirtyMechanism(Qr)
        }
        await Zr;
        const {
          root: Wr,
          tree: ar
        } = this;
        Wr && (Wr.VK(!0), ar.meshes.push(Wr), ar.rootNodes.push(Wr));
        for (const Ir of this.asset.model.nodes) {
          const rr = this.nodeObjects.get(Ir.index);
          rr && ["TransformNode", "LiteNode"].includes(rr.getClassName()) && ar.transformNodes.push(rr);
          for (const Sr of null !== (jr = this.nodePrimitives.get(Ir.index)) && void 0 !== jr ? jr : []) {
            var jr;
            ar.meshes.push(Sr);
            const rr = Sr.geometry;
            rr && !ar.geometries.includes(rr) && ar.geometries.push(rr)
          }
        }
      }
      createRoot() {
        const rr = this.node("__root__", !0);
        this.root = rr, rr.VK(!1), this.Dt.useRightHandedSystem || KS(br, rr)
      }
      loadScene() {
        const rr = [];
        for (const Sr of this.asset.model.rootNodes) rr.push(this.loadNode(this.asset.model.nodes[Sr], (rr => {
          rr.parent = this.root
        })));
        return rr.push(Promise.resolve()), Promise.all(rr).then((() => {}))
      }
      loadNode(rr, Sr) {
        const Qr = `/nodes/${rr.index}`,
          Zr = [],
          Wr = Wr => {
            if (nS(Wr, Qr), KS(rr, Wr), rr.hasCamera && !this.Dt.useRightHandedSystem) {
              const {
                Tx: rr
              } = Wr;
              rr.set(-1, rr.y, rr.z)
            }
            for (const Sr of rr.children) Zr.push(this.loadNode(this.asset.model.nodes[Sr], (rr => {
              rr.parent = Wr
            })));
            (Qr => {
              eS(Qr, rr.extras), Sr(Qr)
            })(Wr)
          };
        if (null === rr.mesh) {
          const Sr = this.node(or(rr), !1);
          this.nodeObjects.set(rr.index, Sr), Wr(Sr)
        } else {
          const Sr = this.asset.model.meshes[rr.mesh];
          Zr.push(this.loadMesh(`/meshes/${Sr.index}`, rr, Sr, Wr))
        }
        return Promise.all(Zr).then((() => {
          for (const Qr of null !== (Sr = this.nodePrimitives.get(rr.index)) && void 0 !== Sr ? Sr : []) {
            var Sr;
            ES(Qr)
          }
          return this.nodeObjects.get(rr.index)
        }))
      }
      loadMesh(rr, Sr, Qr, Zr) {
        const Wr = [],
          ar = or(Sr);
        if (1 === Qr.primitives.length) {
          const Zr = Qr.primitives[0];
          Wr.push(this.loadPrimitive(`${rr}/primitives/${Zr.index}`, ar, Zr, (rr => {
            this.nodeObjects.set(Sr.index, rr), this.nodePrimitives.set(Sr.index, [rr])
          })))
        } else {
          const Zr = this.node(ar, !1);
          this.nodeObjects.set(Sr.index, Zr);
          const jr = [];
          this.nodePrimitives.set(Sr.index, jr);
          for (const Sr of Qr.primitives) Wr.push(this.loadPrimitive(`${rr}/primitives/${Sr.index}`, `${ar}_primitive${Sr.index}`, Sr, (rr => {
            rr.parent = Zr, jr.push(rr)
          })))
        }
        const jr = this.nodeObjects.get(Sr.index);
        return Zr(jr), Promise.all(Wr).then((() => jr))
      }
      loadPrimitive(rr, Sr, Qr, Zr) {
        const Wr = [],
          ar = this.node(Sr, !0);
        if (ar.sideOrientation = this.Dt.useRightHandedSystem ? tS.d.CounterClockWiseSideOrientation : tS.d.ClockWiseSideOrientation, Wr.push(this.geometryData.load(rr, Qr, ar).then((rr => {
            if ((0, jS.c)(ar)) {
              var Sr, Qr;
              const Zr = rr;
              ar.replaceModel(Zr, Int32Array.of(0, null !== (Sr = null === (Qr = Zr.indexData) || void 0 === Qr ? void 0 : Qr.length) && void 0 !== Sr ? Sr : Zr.vertexCount, 0, Zr.vertexCount))
            } else this.create((() => (rr.applyToMesh(ar), rr)))
          }))), this.materials) {
          const rr = 0 === Qr.mode ? tS.d.PointListDrawMode : tS.d.TriangleFillMode,
            Sr = null === Qr.material ? null : this.asset.model.materials[Qr.material];
          Wr.push(this.loadMaterial(Sr, rr, (rr => {
            ar.material = rr
          })))
        }
        return nS(ar, rr), Zr(ar), Promise.all(Wr).then((() => ar))
      }
      loadMaterial(rr, Sr, Qr) {
        var Zr;
        const Wr = `${null!==(Zr=null===rr||void 0===rr?void 0:rr.index)&&void 0!==Zr?Zr:"default"}:${Sr}`;
        let ar = this.materialData.get(Wr);
        return ar || (ar = this.createMaterial(rr, Sr), this.materialData.set(Wr, ar)), Qr(ar.material), ar.promise
      }
      createMaterial(rr, Sr) {
        const Qr = rr ? rr.name || `material${rr.index}` : "__GLTFLoader._default",
          {
            style: Zr,
            unlit: Wr
          } = this.materials;
        let ar;
        const jr = this.create((() => {
          const jr = (0, YS.b)({
            name: Qr,
            Dt: this.Dt,
            sets: {
              ...(0, IS.e)(this.asset, rr, Zr, Wr),
              fillMode: Sr
            },
            unrendered: !0
          });
          return ar = jr.model, jr.mirror
        }));
        let Ir = Promise.resolve();
        if (rr) {
          const Sr = `/materials/${rr.index}`,
            Zr = ar.diffuseTexture;
          if (Zr && !Zr.mirror) Ir = new Promise((rr => setTimeout(rr)));
          else if (Zr) {
            const Wr = Zr.mirror;
            Wr._parentContainer = this.container, Wr.name = `${Qr} (Base Color)`, nS(Wr, `${Sr}${rr.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Wr), Ir = (0, hS.w)(Zr)
          }
          eS(jr, rr.extras), nS(jr, Sr)
        }
        return this.tree.materials.push(jr), {
          material: jr,
          promise: Ir
        }
      }
    }

    function TS() {
      mS.g.dracoDecodes = yr.decodes, mS.g.dracoWorkersStarted = yr.workersStarted, mS.g.dracoMostWorkers = yr.mostWorkers
    }
    async function vS(rr, Sr, Qr, Wr, ar) {
      try {
        return await async function(rr, Sr, Qr, Wr, ar, jr) {
          var Ir;
          let fr;
          const Er = null === (Ir = (0, zS.e)()) || void 0 === Ir ? void 0 : Ir.Ox,
            pr = null !== Er && void 0 !== Er && Er.Wt && Sr === Er.eC() ? Er : null,
            xr = ar && !pr;
          return await WS(rr, Sr, Qr, Wr, Zr.b, (rr => (fr = new yS(Sr, xr), new BS(rr, Sr, fr, xr, new pS(Sr, Wr), jr, pr).load())), !ar), fr
        }(rr, Sr, Qr, lr, Wr, ar)
      } finally {
        TS()
      }
    }
    async function OS(rr, Sr, Qr, Wr) {
      try {
        return await WS(rr, Sr, Qr, lr, Zr.b, (rr => Wr(rr, new pS(Sr, lr))))
      } finally {
        TS()
      }
    }
    xS = Ir, zr || (zr = {
      scriptUrl: new URL(xS.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(xS.wasmBinaryUrl, location.href).href
    })
  },
  37500: rr => {
    rr.exports = function(rr, Sr, Qr, Zr) {
      var Wr = self || window;
      try {
        try {
          var ar;
          try {
            ar = new Wr.Blob([rr])
          } catch (Er) {
            (ar = new(Wr.BlobBuilder || Wr.WebKitBlobBuilder || Wr.MozBlobBuilder || Wr.MSBlobBuilder)).append(rr), ar = ar.getBlob()
          }
          var jr = Wr.URL || Wr.webkitURL,
            Ir = jr.createObjectURL(ar),
            fr = new Wr[Sr](Ir, Qr);
          return jr.revokeObjectURL(Ir), fr
        } catch (Er) {
          return new Wr[Sr]("data:application/javascript,".concat(encodeURIComponent(rr)), Qr)
        }
      } catch (Er) {
        if (!Zr) throw Error("Inline worker is not supported");
        return new Wr[Sr](Zr, Qr)
      }
    }
  },
  54064: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  54071: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);
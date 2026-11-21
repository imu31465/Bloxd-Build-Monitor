export const id = 204;
export const ids = [204];
export const modules = {
  41460: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      loadGlbAsset: () => vJ,
      loadGlbTree: () => GJ
    });
    var pd = kd(38105),
      Nd = kd(41462),
      Wd = kd(36432),
      Pd = kd.n(Wd);

    function Zd() {
      return Pd()('(()=>{class dd extends Error{}function Jd(Jd,kd){const pd=Jd._malloc(kd);if(0===pd)throw new dd(`Draco: the decoder\'s heap refused ${kd} bytes`);return pd}function kd(dd){return{[dd.DT_FLOAT32]:[Float32Array,5126],[dd.DT_INT8]:[Int8Array,5120],[dd.DT_INT16]:[Int16Array,5122],[dd.DT_INT32]:[Int32Array,5124],[dd.DT_UINT8]:[Uint8Array,5121],[dd.DT_UINT16]:[Uint16Array,5123],[dd.DT_UINT32]:[Uint32Array,5125]}}function pd(Jd,pd,Nd,Wd,Pd){let Zd=null,gd=null,Cd=null;try{Zd=new Jd.Decoder,gd=new Jd.DecoderBuffer,gd.Init(pd,pd.byteLength);let Kd=0;const od=Zd.GetEncodedGeometryType(gd);if(od===Jd.TRIANGULAR_MESH){const kd=new Jd.Mesh;Cd=kd;const pd=Zd.DecodeBufferToMesh(gd,kd);if(!pd.ok()||0===kd.ptr)throw new dd(pd.error_msg());Kd=3*kd.num_faces()}else{if(od!==Jd.POINT_CLOUD)throw new dd(`Draco: Cannot decode invalid geometry type ${od}`);{const kd=new Jd.PointCloud;Cd=kd;const pd=Zd.DecodeBufferToPointCloud(gd,kd);if(!pd.ok()||!kd.ptr)throw new dd(pd.error_msg())}}const ld=Cd.num_points();if(ld!==Wd.vertices||Kd!==Wd.indices)throw new dd(`Draco: decoded ${ld} vertices and ${Kd} indices, the accessors declare ${Wd.vertices} and ${Wd.indices}`);const Qd=kd(Jd),Ld=[];for(const{kind:Jd,id:kd,components:pd}of Nd){const Nd=Zd.GetAttributeByUniqueId(Cd,kd);if(!Nd||0===Nd.ptr)throw new dd(`Draco: no attribute with id ${kd} (${Jd})`);const Wd=Nd.data_type();if(!Qd[Wd])throw new dd(`Draco: Cannot decode invalid data type ${Wd}`);if(Nd.num_components()!==pd)throw new dd(`Draco: ${Jd} decodes to ${Nd.num_components()} components, its accessor declares ${pd}`);Ld.push([Jd,Nd,Wd])}return Pd({dracoDecoder:Zd,geometry:Cd,triangles:od===Jd.TRIANGULAR_MESH,numPoints:ld,numIndices:Kd,attributes:Ld})}finally{Cd&&Jd.destroy(Cd),gd&&Jd.destroy(gd),Zd&&Jd.destroy(Zd)}}const Nd=self;let Wd=null;self.onmessage=dd=>{let{data:Pd}=dd;if("init"===Pd.id){try{importScripts(Pd.url),Wd=DracoDecoderModule({wasmBinary:Pd.wasmBinary}),Nd.postMessage({id:"initDone"})}catch(od){Nd.postMessage({id:"initError",message:od instanceof Error?od.message:String(od)})}return}const{seq:Zd,data:gd,attributeIds:Cd,expected:Kd}=Pd;Wd?Wd.then((dd=>{try{const Wd=function(dd,Nd,Wd,Pd){const Zd=Object.keys(Wd).map((dd=>({kind:dd,id:Wd[dd],components:Pd.components[dd]})));return pd(dd,Nd,Zd,Pd,(pd=>{let{dracoDecoder:Nd,geometry:Wd,triangles:Pd,numPoints:Zd,numIndices:gd,attributes:Cd}=pd;const Kd=kd(dd);let od=null;if(Pd){const kd=4*gd,pd=Jd(dd,kd);try{Nd.GetTrianglesUInt32Array(Wd,kd,pd),od=new Uint32Array(gd),od.set(new Uint32Array(dd.HEAPF32.buffer,pd,gd))}finally{dd._free(pd)}}const ld=[];for(const[kd,Qd,Ld]of Cd){const[pd]=Kd[Ld],Pd=Qd.num_components(),gd=Zd*Pd,Cd=gd*pd.BYTES_PER_ELEMENT,od=Jd(dd,Cd);try{Nd.GetAttributeDataArrayForAllPoints(Wd,Qd,Ld,Cd,od),ld.push({kind:kd,data:new pd(dd.HEAPF32.buffer,od,gd).slice(),size:Pd,byteOffset:Qd.byte_offset(),byteStride:Qd.byte_stride(),normalized:Qd.normalized()})}finally{dd._free(od)}}return{indices:od,attributes:ld,totalVertices:Zd}}))}(dd,gd,Cd,Kd),Pd=Wd.attributes.map((dd=>dd.data.buffer));Wd.indices&&Pd.push(Wd.indices.buffer),Nd.postMessage({id:"decoded",seq:Zd,...Wd},Pd)}catch(od){Nd.postMessage({id:"decodeError",seq:Zd,message:od instanceof Error?od.message:String(od)})}}),(dd=>{Nd.postMessage({id:"decodeError",seq:Zd,message:dd instanceof Error?dd.message:String(dd)})})):Nd.postMessage({id:"decodeError",seq:Zd,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, kd.p + "dracoDecode.worker.d121dc65.worker.js")
    }
    var gd = kd(95);
    const Cd = 1e3;
    let Kd = null,
      od = null;
    const ld = [],
      Qd = [];
    let Ld = 0;
    const Od = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      ed = function(dd, Jd) {
        const kd = dd ? Math.max(1, Math.min(Math.floor(.5 * dd), 4)) : 1;
        return Jd ? Math.min(kd, 2) : kd
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, gd.isMobile)());

    function Rd() {
      if (!Kd) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: dd,
        wasmBinaryUrl: Jd
      } = Kd;
      return od ??= fetch(Jd).then((dd => {
        if (!dd.ok) throw new Error(`Draco: fetching ${Jd} failed: ${dd.status}`);
        return dd.arrayBuffer()
      })), od.catch((() => {
        od = null
      })), Od.workersStarted++, od.then((Jd => new Promise(((kd, pd) => {
        const Nd = new Zd;
        Nd.onerror = dd => {
          Nd.onmessage = null, Nd.onerror = null, Nd.terminate(), pd(new Error("Draco: the decode worker failed to start" + (dd.message ? `: ${dd.message}` : " (its script did not load)")))
        }, Nd.onmessage = dd => {
          let {
            data: Jd
          } = dd;
          Nd.onmessage = null, Nd.onerror = null, "initDone" === Jd.id ? kd(Nd) : (Nd.terminate(), pd(new Error(`Draco: ${"initError"===Jd.id?Jd.message:"the worker did not start"}`)))
        };
        const Wd = Jd.slice(0),
          Pd = {
            id: "init",
            url: dd,
            wasmBinary: Wd
          };
        Nd.postMessage(Pd, [Wd])
      }))))
    }

    function Id(dd) {
      const Jd = ld.indexOf(dd); - 1 !== Jd && ld.splice(Jd, 1);
      const kd = Qd.shift();
      kd && vd(kd)
    }

    function Gd(dd, Jd) {
      dd.busy = !0, dd.releaseTimer && (clearTimeout(dd.releaseTimer), dd.releaseTimer = null);
      dd.worker.then((kd => {
        const pd = Ld++;
        kd.onmessage = Nd => {
          let {
            data: Wd
          } = Nd;
          if (("decoded" === Wd.id || "decodeError" === Wd.id) && Wd.seq === pd) {
            if (kd.onmessage = null, kd.onerror = null, "decoded" === Wd.id) return Od.decodes++, Jd.resolve({
              indices: Wd.indices,
              attributes: Wd.attributes,
              totalVertices: Wd.totalVertices
            }), void(() => {
              const Jd = Qd.shift();
              Jd ? Gd(dd, Jd) : (dd.busy = !1, dd.releaseTimer = setTimeout((() => {
                const Jd = ld.indexOf(dd); - 1 !== Jd && ld.splice(Jd, 1), dd.worker.then((dd => {
                  dd.terminate()
                }))
              }), Cd))
            })();
            kd.terminate(), Jd.reject(new Error(Wd.message)), Id(dd)
          }
        }, kd.onerror = pd => {
          kd.onmessage = null, kd.onerror = null, kd.terminate(), Jd.reject(new Error(`Draco: the decode worker failed: ${pd.message}`)), Id(dd)
        };
        const Nd = {
          id: "decode",
          seq: pd,
          data: Jd.data,
          attributeIds: Jd.attributeIds,
          expected: Jd.expected
        };
        kd.postMessage(Nd, [Jd.data.buffer])
      }), (kd => {
        Jd.reject(kd instanceof Error ? kd : new Error(String(kd))), Id(dd)
      }))
    }

    function vd(dd) {
      const Jd = ld.find((dd => !dd.busy));
      if (Jd) Gd(Jd, dd);
      else {
        if (ld.length < ed) {
          const Jd = {
            worker: Rd(),
            busy: !0,
            releaseTimer: null
          };
          return ld.push(Jd), Od.mostWorkers = Math.max(Od.mostWorkers, ld.length), void Gd(Jd, dd)
        }
        Qd.push(dd)
      }
    }

    function xd(dd, Jd, kd) {
      return new Promise(((pd, Nd) => {
        vd({
          data: new Int8Array(dd.buffer, dd.byteOffset, dd.byteLength).slice(),
          attributeIds: Jd,
          expected: kd,
          resolve: pd,
          reject: Nd
        })
      }))
    }
    var qd = kd(37669),
      Bd = kd(37682),
      sd = kd(9315),
      ad = kd(9310);
    const Md = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Fd(dd) {
      const Jd = (0, ad.d)(dd.byteLength);
      if (Jd) throw new sd.m(Jd);
      const {
        json: kd,
        bin: pd
      } = (0, sd.w)(dd), Nd = (0, ad.c)(kd, pd);
      if (Nd) throw new sd.m(Nd);
      try {
        return function(dd, Jd) {
          var kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed;
          const Rd = new Map,
            Id = kd => {
              let pd = Rd.get(kd);
              if (!pd) {
                var Nd;
                const Wd = dd.bufferViews[kd],
                  Pd = null !== (Nd = Wd.byteOffset) && void 0 !== Nd ? Nd : 0;
                pd = {
                  index: kd,
                  bytes: Jd.subarray(Pd, Pd + Wd.byteLength),
                  byteStride: Wd.byteStride
                }, Rd.set(kd, pd)
              }
              return pd
            },
            Gd = new Map,
            vd = Jd => {
              let kd = Gd.get(Jd);
              if (!kd) {
                var pd;
                const Nd = dd.accessors[Jd];
                kd = {
                  index: Jd,
                  count: Nd.count,
                  type: Nd.type,
                  numComponents: sd.n[Nd.type],
                  componentType: Nd.componentType,
                  normalized: null !== (pd = Nd.normalized) && void 0 !== pd && pd,
                  byteOffset: Nd.byteOffset,
                  bufferView: void 0 === Nd.bufferView ? null : Id(Nd.bufferView),
                  min: Nd.min,
                  max: Nd.max
                }, Gd.set(Jd, kd)
              }
              return kd
            },
            xd = null !== (kd = null === (pd = dd.extensionsUsed) || void 0 === pd ? void 0 : pd.includes("KHR_draco_mesh_compression")) && void 0 !== kd && kd,
            qd = (null !== (Nd = dd.meshes) && void 0 !== Nd ? Nd : []).map(((Jd, kd) => {
              const pd = Jd.primitives.map(((Jd, kd) => {
                var pd, Nd, Wd;
                const Pd = xd ? null === (pd = Jd.extensions) || void 0 === pd ? void 0 : pd.KHR_draco_mesh_compression : void 0;
                let Zd = null;
                const gd = [];
                if (Pd) {
                  const kd = {
                    vertices: dd.accessors[Jd.attributes.POSITION].count,
                    indices: void 0 === Jd.indices ? 0 : dd.accessors[Jd.indices].count,
                    components: {}
                  };
                  Zd = {
                    bufferView: Id(Pd.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: kd
                  };
                  for (const [pd, Nd] of sd.i) {
                    const Wd = Pd.attributes[pd];
                    if (void 0 === Wd) continue;
                    Zd.attributeIds[Nd] = Wd;
                    const gd = Jd.attributes[pd];
                    var Cd;
                    if (void 0 !== gd) Zd.normalized[Nd] = null !== (Cd = dd.accessors[gd].normalized) && void 0 !== Cd && Cd, kd.components[Nd] = sd.n[dd.accessors[gd].type]
                  }
                } else
                  for (const [dd, Kd] of sd.i) {
                    const kd = Jd.attributes[dd];
                    void 0 !== kd && gd.push({
                      semantic: dd,
                      kind: Kd,
                      accessor: vd(kd)
                    })
                  }
                return {
                  index: kd,
                  mode: null !== (Nd = Jd.mode) && void 0 !== Nd ? Nd : 4,
                  attributes: gd,
                  indices: Pd || void 0 === Jd.indices ? null : vd(Jd.indices),
                  position: void 0 === Jd.attributes.POSITION ? null : vd(Jd.attributes.POSITION),
                  material: null !== (Wd = Jd.material) && void 0 !== Wd ? Wd : null,
                  draco: Zd
                }
              }));
              return {
                index: kd,
                name: Jd.name,
                primitives: pd,
                extras: Jd.extras
              }
            })),
            Bd = (null !== (Wd = dd.nodes) && void 0 !== Wd ? Wd : []).map(((dd, Jd) => {
              var kd, pd;
              return {
                index: Jd,
                name: dd.name,
                children: null !== (kd = dd.children) && void 0 !== kd ? kd : [],
                mesh: null !== (pd = dd.mesh) && void 0 !== pd ? pd : null,
                translation: dd.translation,
                rotation: dd.rotation,
                scale: dd.scale,
                hasCamera: void 0 !== dd.camera,
                extras: dd.extras
              }
            })),
            ad = null !== (Pd = null === (Zd = dd.extensionsUsed) || void 0 === Zd ? void 0 : Zd.includes("KHR_materials_unlit")) && void 0 !== Pd && Pd,
            Fd = null !== (gd = null === (Cd = dd.extensionsUsed) || void 0 === Cd ? void 0 : Cd.includes("KHR_texture_transform")) && void 0 !== gd && gd,
            Yd = (null !== (Kd = dd.materials) && void 0 !== Kd ? Kd : []).map(((dd, Jd) => {
              var kd, pd, Nd, Wd;
              const Pd = dd.pbrMetallicRoughness,
                Zd = null === Pd || void 0 === Pd ? void 0 : Pd.baseColorTexture;
              return {
                index: Jd,
                name: dd.name,
                extras: dd.extras,
                unlit: ad && void 0 !== (null === (kd = dd.extensions) || void 0 === kd ? void 0 : kd.KHR_materials_unlit),
                pbr: Pd ? {
                  baseColorFactor: Pd.baseColorFactor,
                  metallicFactor: Pd.metallicFactor,
                  roughnessFactor: Pd.roughnessFactor
                } : null,
                baseColorTexture: Zd ? {
                  texture: Zd.index,
                  transform: Fd && (null === (pd = Zd.extensions) || void 0 === pd ? void 0 : pd.KHR_texture_transform) || null
                } : null,
                emissiveFactor: dd.emissiveFactor,
                alphaMode: null !== (Nd = dd.alphaMode) && void 0 !== Nd ? Nd : "OPAQUE",
                alphaCutoff: dd.alphaCutoff,
                doubleSided: null !== (Wd = dd.doubleSided) && void 0 !== Wd && Wd
              }
            })),
            md = (null !== (od = dd.textures) && void 0 !== od ? od : []).map(((Jd, kd) => {
              var pd, Nd;
              const Wd = void 0 === Jd.sampler ? Md : {
                index: Jd.sampler,
                ...null === (pd = dd.samplers) || void 0 === pd ? void 0 : pd[Jd.sampler]
              };
              return {
                index: kd,
                sampler: {
                  index: Wd.index,
                  magFilter: Wd.magFilter,
                  minFilter: Wd.minFilter,
                  wrapS: Wd.wrapS,
                  wrapT: Wd.wrapT
                },
                image: null !== (Nd = Jd.source) && void 0 !== Nd ? Nd : -1
              }
            })),
            bd = (null !== (ld = dd.images) && void 0 !== ld ? ld : []).map(((dd, Jd) => ({
              index: Jd,
              name: dd.name,
              mimeType: dd.mimeType,
              bufferView: Id(dd.bufferView)
            }))),
            Sd = null !== (Qd = (0, sd.v)(dd)) && void 0 !== Qd ? Qd : 0;
          return {
            json: dd,
            rootNodes: null !== (Ld = null === (Od = dd.scenes) || void 0 === Od || null === (ed = Od[Sd]) || void 0 === ed ? void 0 : ed.nodes) && void 0 !== Ld ? Ld : [],
            nodes: Bd,
            meshes: qd,
            materials: Yd,
            textures: md,
            images: bd
          }
        }(kd, pd)
      } catch (Wd) {
        throw Wd instanceof sd.k ? Wd : new sd.k(`reading the GLB failed: ${Wd instanceof Error?Wd.message:String(Wd)}`)
      }
    }
    async function Yd(dd, Jd) {
      var kd, pd;
      const Nd = dd.draco;
      if (!Nd) throw new sd.k("not a Draco primitive");
      let Wd;
      try {
        Wd = await Jd(Nd.bufferView.bytes, Nd.attributeIds, Nd.expected)
      } catch (Cd) {
        throw new sd.k(`Draco decoding failed: ${Cd instanceof Error?Cd.message:String(Cd)}`)
      }
      const {
        vertices: Pd,
        indices: Zd,
        components: gd
      } = Nd.expected;
      if (Wd.totalVertices !== Pd || (null !== (kd = null === (pd = Wd.indices) || void 0 === pd ? void 0 : pd.length) && void 0 !== kd ? kd : 0) !== Zd || Wd.attributes.some((dd => dd.size !== gd[dd.kind] || dd.data.length !== Pd * dd.size))) throw new sd.k("Draco decoding gave other counts than the accessors declare");
      for (const Kd of Wd.attributes) {
        const dd = Nd.normalized[Kd.kind];
        void 0 !== dd && (Kd.normalized = dd)
      }
      return Wd
    }
    const md = new WeakMap;

    function bd(dd, Jd) {
      var kd;
      const pd = null !== (kd = md.get(dd)) && void 0 !== kd ? kd : Jd(dd);
      return md.set(dd, pd), pd
    }

    function Sd(dd) {
      const Jd = dd.bufferView,
        kd = 5125 === dd.componentType ? Uint32Array : Uint16Array,
        pd = Jd.bytes.buffer,
        Nd = Jd.bytes.byteOffset + (dd.byteOffset || 0);
      return Nd % kd.BYTES_PER_ELEMENT !== 0 ? new kd(pd.slice(Nd, Nd + dd.count * kd.BYTES_PER_ELEMENT), 0) : new kd(pd, Nd, dd.count)
    }

    function jd(dd, Jd) {
      if (dd.min && dd.max) return [new Float64Array(dd.min), new Float64Array(dd.max)];
      const kd = Jd.find((dd => {
          let {
            kind: Jd
          } = dd;
          return "position" === Jd
        })),
        pd = kd ? (0, Bd.d)(kd, dd.count) : new Float32Array(0);
      return (0, Bd.p)(pd.length / 3, ((dd, Jd) => pd[3 * dd + Jd]))
    }

    function Xd(dd) {
      const Jd = dd.attributes.map((dd => {
          var Jd, kd;
          let {
            kind: pd,
            accessor: Nd
          } = dd;
          const {
            bufferView: Wd,
            numComponents: Pd
          } = Nd;
          if (!Wd) {
            return {
              kind: pd,
              data: bd(Nd, (() => new Float32Array(Pd * Nd.count))),
              offset: 0,
              stride: 4 * Pd,
              components: Pd,
              glType: 5126,
              isNormalized: !1
            }
          }
          const Zd = null !== (Jd = Wd.byteStride) && void 0 !== Jd ? Jd : Pd * sd.e[Nd.componentType];
          return {
            kind: pd,
            data: Wd.bytes,
            offset: null !== (kd = Nd.byteOffset) && void 0 !== kd ? kd : 0,
            stride: Zd,
            components: Pd,
            glType: Nd.componentType,
            isNormalized: Nd.normalized
          }
        })),
        kd = dd.indices,
        pd = kd && bd(kd, Sd),
        Nd = dd.position;
      return new Bd.c(Jd, pd, Nd.count, ...jd(Nd, Jd))
    }
    const fd = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function nd(dd, Jd) {
      const kd = Jd.attributes.map((dd => {
        let {
          kind: Jd,
          data: kd,
          size: pd,
          byteOffset: Nd,
          byteStride: Wd,
          normalized: Pd
        } = dd;
        return {
          kind: Jd,
          data: kd,
          offset: Nd,
          stride: Wd,
          components: pd,
          glType: 5120 + fd.indexOf(kd.constructor),
          isNormalized: Pd
        }
      }));
      return new Bd.c(kd, Jd.indices, Jd.totalVertices, ...jd(dd.position, kd))
    }

    function Ud(dd) {
      const Jd = dd.lastIndexOf("/");
      return Jd < 0 ? dd : dd.substring(Jd + 1)
    }

    function yd(dd) {
      const Jd = dd.lastIndexOf("/");
      return Jd < 0 ? "" : dd.substring(0, Jd + 1)
    }

    function Dd(dd) {
      return dd.name || `node${dd.index}`
    }
    const Td = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      Ed = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      cd = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function hd(dd) {
      var Jd, kd, pd, Nd;
      const Wd = null !== (Jd = dd.minFilter) && void 0 !== Jd ? Jd : 9987;
      return 9729 === (null !== (kd = dd.magFilter) && void 0 !== kd ? kd : 9729) ? null !== (pd = Ed[Wd]) && void 0 !== pd ? pd : 3 : null !== (Nd = cd[Wd]) && void 0 !== Nd ? Nd : 4
    }
    const rd = {
      33071: 0,
      33648: 2
    };

    function ud(dd) {
      var Jd;
      return null !== (Jd = rd[null !== dd && void 0 !== dd ? dd : 10497]) && void 0 !== Jd ? Jd : 1
    }

    function td(dd) {
      return 9728 === dd.minFilter || 9729 === dd.minFilter
    }

    function Vd(dd) {
      var Jd, kd, pd;
      const Nd = Float64Array.from(null !== (Jd = dd.scale) && void 0 !== Jd ? Jd : [1, 1, 1]);
      return dd.hasCamera && (Nd[0] = -1), {
        translation: Float64Array.from(null !== (kd = dd.translation) && void 0 !== kd ? kd : [0, 0, 0]),
        rotation: Float64Array.from(null !== (pd = dd.rotation) && void 0 !== pd ? pd : [0, 0, 0, 1]),
        scale: Nd
      }
    }

    function zd(dd, Jd) {
      let {
        translation: kd,
        rotation: pd,
        scale: Nd
      } = dd;
      const Wd = new Float32Array(16);
      return (0, qd.d)(Nd, 0, pd, 0, kd, 0, Wd), Jd && (0, qd.l)(Wd, Jd, 0, Wd), Wd
    }
    class Hd {
      constructor(dd, Jd, kd, pd) {
        this.model = dd, this.decode = Jd, this.fileInfo = kd, this.uniqueRootUrl = pd, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Nd = new Set,
          Wd = (Jd, kd) => {
            const pd = dd.nodes[Jd];
            if (this.parents.has(pd)) throw new sd.k(`/nodes/${Jd}: Invalid recursive node hierarchy`);
            this.parents.set(pd, kd);
            const Pd = null === pd.mesh ? [] : dd.meshes[pd.mesh].primitives,
              Zd = Pd.map((dd => {
                const Jd = Pd.length > 1;
                return {
                  name: Jd ? `${Dd(pd)}_primitive${dd.index}` : Dd(pd),
                  node: pd,
                  primitive: dd,
                  part: Jd,
                  geometry: null
                }
              }));
            this.uses.set(pd, Zd);
            const gd = null !== pd.mesh && Nd.has(pd.mesh);
            Nd.add(pd.mesh), this.own.set(pd, gd ? [] : Zd);
            for (const dd of pd.children) Wd(dd, pd)
          };
        for (const Pd of dd.rootNodes) Wd(Pd, null);
        this.primitives = dd.nodes.flatMap((dd => {
          var Jd;
          return null !== (Jd = this.own.get(dd)) && void 0 !== Jd ? Jd : []
        }))
      }
      decodeGeometries() {
        const dd = new Map;
        return Promise.all(this.primitives.map((async Jd => {
          const {
            primitive: kd
          } = Jd, pd = kd.draco;
          let Nd = pd ? dd.get(pd.bufferView.index) : Promise.resolve(Xd(kd));
          Nd || (Nd = Yd(kd, this.decode).then((dd => nd(kd, dd))), dd.set(pd.bufferView.index, Nd)), Jd.geometry = await Nd
        })))
      }
      parentOf(dd) {
        var Jd;
        return null !== (Jd = this.parents.get(dd)) && void 0 !== Jd ? Jd : null
      }
      meshesUnder(dd) {
        const Jd = this.model.nodes.filter((dd => this.uses.has(dd)));
        for (const pd of Jd) {
          const Jd = this.uses.get(pd),
            kd = Jd.find((Jd => Jd.name === dd));
          if (kd) return 1 === Jd.length ? this.subtree(pd) : this.own.get(pd).includes(kd) ? [kd] : []
        }
        const kd = Jd.find((Jd => 1 !== this.uses.get(Jd).length && Dd(Jd) === dd));
        return kd ? this.subtree(kd) : null
      }
      subtree(dd) {
        return [...this.own.get(dd), ...dd.children.flatMap((dd => this.subtree(this.model.nodes[dd])))]
      }
      worldMatrix(dd, Jd, kd) {
        let pd = zd(Vd(Jd ? Td : {}), null);
        const Nd = [];
        for (let Pd = dd.part ? dd.node : this.parentOf(dd.node); Pd; Pd = this.parentOf(Pd)) Nd.unshift(Pd);
        for (const Pd of Nd) pd = zd(Vd(Pd), pd);
        const Wd = Vd(dd.part ? {} : dd.node);
        return void 0 !== kd && Wd.scale.fill(kd), zd(Wd, pd)
      }
      floats(dd) {
        const {
          vertexAttributes: Jd,
          vertexCount: kd
        } = dd.geometry;
        return new Map(Jd.map((dd => [dd.kind, (0, Bd.d)(dd, kd)])))
      }
      imageUrl(dd) {
        return function(dd, Jd, kd) {
          let {
            name: pd
          } = Jd;
          return `data:${dd}${pd}#image${kd}`
        }(this.uniqueRootUrl, this.fileInfo, dd)
      }
      textureDesc(dd, Jd) {
        var kd;
        let {
          texture: pd,
          transform: Nd
        } = dd;
        const {
          sampler: Wd,
          image: Pd
        } = this.model.textures[pd], {
          bufferView: Zd,
          mimeType: gd,
          name: Cd
        } = this.model.images[Pd], Kd = Nd && {
          ...Nd.offset ? {
            uOffset: Nd.offset[0],
            vOffset: Nd.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Nd.rotation ? {
            wAng: -Nd.rotation
          } : {},
          ...Nd.scale ? {
            uScale: Nd.scale[0],
            vScale: Nd.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(Pd),
          noMipmap: td(Wd),
          invertY: !1,
          samplingMode: hd(Wd),
          data: {
            bytes: Zd.bytes,
            mimeType: gd,
            label: Cd,
            context: `/textures/${pd}`
          },
          sets: {
            wrapU: ud(Wd.wrapS),
            wrapV: ud(Wd.wrapT),
            ...Kd,
            coordinatesIndex: null !== (kd = null === Nd || void 0 === Nd ? void 0 : Nd.texCoord) && void 0 !== kd ? kd : 0,
            hasAlpha: Jd
          }
        }
      }
    }
    async function wd(dd, Jd, kd, pd, Nd, Wd) {
      let Pd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const Zd = function(dd, Jd, kd) {
          return "string" !== typeof Jd ? {
            url: "",
            rootUrl: dd,
            name: kd()
          } : Jd ? Jd.startsWith("data:") ? {
            url: Jd,
            rootUrl: dd,
            name: ""
          } : dd ? {
            url: dd + Jd,
            rootUrl: dd,
            name: Jd
          } : {
            url: Jd,
            rootUrl: yd(Jd),
            name: Ud(Jd)
          } : {
            url: dd,
            rootUrl: yd(dd),
            name: Ud(dd)
          }
        }(kd, dd, Nd),
        gd = {};
      Jd.addPendingData(gd);
      try {
        const kd = Fd(await async function(dd, Jd) {
            return "string" !== typeof Jd ? Jd : dd.url.startsWith("data:") ? (0, sd.q)(dd.url) : await (0, sd.t)(dd.url)
          }(Zd, dd)),
          gd = new Hd(kd, pd, Zd, function(dd, Jd) {
            let {
              rootUrl: kd,
              name: pd
            } = dd;
            return !kd.startsWith("file:") && pd ? kd : `${kd}${Jd()}/`
          }(Zd, Nd));
        return await Wd(gd), Jd.importedMeshesFiles && (Jd.loadingPluginName = "hY", Pd && Jd.importedMeshesFiles.push(Zd.url)), gd
      } finally {
        Jd.removePendingData(gd)
      }
    }
    var Ad = kd(37797),
      dJ = kd(37640),
      JJ = kd(38083);

    function kJ(dd) {
      if (null === dd || void 0 === dd || !dd.min || !dd.max) return null;
      const [Jd, kd, pd] = dd.min, [Nd, Wd, Pd] = dd.max, {
        BoundingInfo: Zd,
        IL: gd
      } = (0, Ad.e)();
      return new Zd(new gd(Jd, kd, pd), new gd(Nd, Wd, Pd))
    }

    function pJ(dd) {
      (0, dJ.h)(dd) || (dd.geometry && dd.geometry.useBoundingInfoFromGeometry ? dd._updateBoundingInfo() : dd.refreshBoundingInfo(!0, !0))
    }
    class NJ {
      constructor(dd, Jd) {
        this.BO = dd, this.decode = Jd, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(dd) {
        let Jd = this.viewData.get(dd.index);
        return Jd || (Jd = this.bufferData.then((() => dd.bytes)), this.viewData.set(dd.index, Jd)), Jd
      }
      viewBuffer(dd) {
        let Jd = this.viewBuffers.get(dd.index);
        return Jd || (Jd = this.viewBytes(dd).then((dd => new((0, Ad.e)().kL)(this.BO.eL(), dd, !1))), this.viewBuffers.set(dd.index, Jd)), Jd
      }
      vertexBuffer(dd, Jd) {
        const {
          kind: kd,
          data: pd
        } = Jd, Nd = `${dd.index}:${kd}`;
        let Wd = this.vertexBuffers.get(Nd);
        if (!Wd) {
          const Pd = dd.bufferView;
          Wd = Pd ? this.viewBuffer(Pd).then((dd => this.layoutVertexBuffer(dd, Jd))) : Promise.resolve(pd).then((dd => new((0, Ad.e)().VertexBuffer)(this.BO.eL(), dd, kd, !1))), this.vertexBuffers.set(Nd, Wd)
        }
        return Wd
      }
      layoutVertexBuffer(dd, Jd) {
        let {
          kind: kd,
          offset: pd,
          stride: Nd,
          components: Wd,
          glType: Pd,
          isNormalized: Zd
        } = Jd;
        const gd = this.BO.eL();
        return new((0, Ad.e)().VertexBuffer)(gd, dd, kd, !1, void 0, Nd, void 0, pd, Wd, Pd, Zd, !0, void 0, !0)
      }
      load(dd, Jd, kd) {
        const pd = (0, dJ.h)(kd),
          Nd = dd => {
            pd || (kd._delayInfo = kd._delayInfo || [], -1 === kd._delayInfo.indexOf(dd) && kd._delayInfo.push(dd))
          },
          Wd = Jd.draco;
        if (Wd) {
          for (const dd in Wd.attributeIds) Nd(dd);
          let Pd = this.dracoGeometry.get(Wd.bufferView.index);
          return Pd || (Pd = this.viewBytes(Wd.bufferView).then((async () => {
            let Nd;
            try {
              Nd = await Yd(Jd, this.decode)
            } catch (gd) {
              throw new sd.k(`${dd}: ${gd instanceof Error?gd.message:String(gd)}`)
            }
            const Wd = nd(Jd, Nd);
            if (pd) return Wd;
            const Pd = kJ(Jd.position),
              Zd = new((0, Ad.e)().MirroredGeometry)(kd.name, this.BO);
            Pd && (Zd._boundingInfo = Pd, Zd.useBoundingInfoFromGeometry = !0), Wd.indexData && Zd.setIndices(Wd.indexData);
            for (const dd of Wd.vertexAttributes) Zd.setVerticesBuffer(this.layoutVertexBuffer(dd.data, dd), Wd.vertexCount);
            return Zd.link(Wd), Zd
          })), this.dracoGeometry.set(Wd.bufferView.index, Pd)), Pd
        }
        const Pd = [],
          Zd = Xd(Jd);
        if (pd) return kd.isUnIndexed = !Zd.indexData, kd.hasVertexAlpha = (0, JJ.f)(Jd), Promise.resolve(Zd);
        const gd = new((0, Ad.e)().MirroredGeometry)(kd.name, this.BO),
          {
            indexData: Cd
          } = Zd;
        Cd ? Pd.push(this.viewBytes(Jd.indices.bufferView).then((() => {
          gd.setIndices(Cd)
        }))) : kd.isUnIndexed = !0;
        for (const [Kd, {
            kind: od,
            accessor: ld
          }] of Jd.attributes.entries()) Nd(od), Pd.push(this.vertexBuffer(ld, Zd.vertexAttributes[Kd]).then((dd => {
          if ("position" === dd.getKind()) {
            const dd = kJ(ld);
            dd && (gd._boundingInfo = dd, gd.useBoundingInfoFromGeometry = !0)
          }
          gd.setVerticesBuffer(dd, Zd.vertexCount)
        })));
        return (0, JJ.f)(Jd) && (kd.hasVertexAlpha = !0), Promise.all(Pd).then((() => (gd.link(Zd), gd)))
      }
    }
    var WJ, PJ = kd(37492),
      ZJ = kd(37245),
      gJ = kd(38097),
      CJ = kd(37431),
      KJ = kd(37473),
      oJ = kd(2634),
      lJ = kd(37456);

    function QJ(dd, Jd) {
      dd.metadata = dd.metadata || {};
      const kd = dd._internalMetadata = dd._internalMetadata || {},
        pd = kd.hY = kd.hY || {};
      (pd.pointers = pd.pointers || []).push(Jd)
    }

    function LJ(dd, Jd) {
      if (Jd && Object.keys(Jd).length > 0) {
        const kd = dd.metadata = dd.metadata || {};
        (kd.hY = kd.hY || {}).extras = Jd
      }
    }

    function OJ(dd, Jd) {
      Jd.position = dd.translation ? ZJ.IL.FromArray(dd.translation) : ZJ.IL.Zero(), Jd.rotationQuaternion = dd.rotation ? ZJ.Quaternion.FromArray(dd.rotation) : ZJ.Quaternion.Identity(), Jd.fp = dd.scale ? ZJ.IL.FromArray(dd.scale) : ZJ.IL.One()
    }
    class eJ {
      constructor(dd, Jd) {
        if (this.BO = dd, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, Jd) {
          const Jd = dd.eL(),
            kd = dd.Zm.add((() => {
              this.dispose()
            })),
            pd = Jd.onContextRestoredObservable.add((() => {
              for (const dd of [...this.geometries, ...this.meshes, ...this.textures]) dd._rebuild()
            }));
          this.release = () => {
            dd.Zm.remove(kd), Jd.onContextRestoredObservable.remove(pd)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const dd of this.meshes) this.BO.apd(dd);
          for (const dd of this.materials) this.BO.addMaterial(dd);
          for (const dd of this.geometries) this.BO.addGeometry(dd);
          for (const dd of this.transformNodes) this.BO.addTransformNode(dd);
          for (const dd of this.textures) this.BO.addTexture(dd)
        }
      }
      dispose() {
        var dd;
        for (const Jd of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const dd of Jd.slice()) dd.dispose();
          Jd.length = 0
        }
        null === (dd = this.release) || void 0 === dd || dd.call(this), this.release = null
      }
    }
    class RJ {
      constructor(dd, Jd, kd, pd, Nd, Wd, Pd) {
        this.asset = dd, this.BO = Jd, this.tree = kd, this.geometryData = Nd, this.materials = Wd, this.lite = Pd, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = pd ? kd : null
      }
      create(dd) {
        if (this.lite) return dd();
        const Jd = this.BO;
        Jd._blockEntityCollection = !!this.container;
        try {
          const Jd = dd();
          return this.container && (Jd._parentContainer = this.container), Jd
        } finally {
          Jd._blockEntityCollection = !1
        }
      }
      node(dd, Jd) {
        return this.create((() => this.lite ? Jd ? (0, gJ.i)(this.lite, dd) : (0, gJ.t)(this.lite, dd) : Jd ? new((0, Ad.e)().Mesh)(dd, this.BO) : new((0, Ad.e)().TransformNode)(dd, this.BO)))
      }
      async load() {
        var dd;
        this.asset.model.json.nodes && this.createRoot();
        const Jd = this.lite ? null : this.BO,
          kd = null !== (dd = null === Jd || void 0 === Jd ? void 0 : Jd.blockMaterialDirtyMechanism) && void 0 !== dd && dd;
        let pd;
        Jd && (Jd.blockMaterialDirtyMechanism = !0);
        try {
          pd = this.loadScene()
        } finally {
          null === Jd || void 0 === Jd || Jd._forceBlockMaterialDirtyMechanism(kd)
        }
        await pd;
        const {
          root: Nd,
          tree: Wd
        } = this;
        Nd && (Nd.XM(!0), Wd.meshes.push(Nd), Wd.rootNodes.push(Nd));
        for (const Zd of this.asset.model.nodes) {
          const dd = this.nodeObjects.get(Zd.index);
          dd && ["TransformNode", "LiteNode"].includes(dd.getClassName()) && Wd.transformNodes.push(dd);
          for (const Jd of null !== (Pd = this.nodePrimitives.get(Zd.index)) && void 0 !== Pd ? Pd : []) {
            var Pd;
            Wd.meshes.push(Jd);
            const dd = Jd.geometry;
            dd && !Wd.geometries.includes(dd) && Wd.geometries.push(dd)
          }
        }
      }
      createRoot() {
        const dd = this.node("__root__", !0);
        this.root = dd, dd.XM(!1), this.BO.useRightHandedSystem || OJ(Td, dd)
      }
      loadScene() {
        const dd = [];
        for (const Jd of this.asset.model.rootNodes) dd.push(this.loadNode(this.asset.model.nodes[Jd], (dd => {
          dd.parent = this.root
        })));
        return dd.push(Promise.resolve()), Promise.all(dd).then((() => {}))
      }
      loadNode(dd, Jd) {
        const kd = `/nodes/${dd.index}`,
          pd = [],
          Nd = Nd => {
            if (QJ(Nd, kd), OJ(dd, Nd), dd.hasCamera && !this.BO.useRightHandedSystem) {
              const {
                fp: dd
              } = Nd;
              dd.set(-1, dd.y, dd.z)
            }
            for (const Jd of dd.children) pd.push(this.loadNode(this.asset.model.nodes[Jd], (dd => {
              dd.parent = Nd
            })));
            (kd => {
              LJ(kd, dd.extras), Jd(kd)
            })(Nd)
          };
        if (null === dd.mesh) {
          const Jd = this.node(Dd(dd), !1);
          this.nodeObjects.set(dd.index, Jd), Nd(Jd)
        } else {
          const Jd = this.asset.model.meshes[dd.mesh];
          pd.push(this.loadMesh(`/meshes/${Jd.index}`, dd, Jd, Nd))
        }
        return Promise.all(pd).then((() => {
          for (const kd of null !== (Jd = this.nodePrimitives.get(dd.index)) && void 0 !== Jd ? Jd : []) {
            var Jd;
            pJ(kd)
          }
          return this.nodeObjects.get(dd.index)
        }))
      }
      loadMesh(dd, Jd, kd, pd) {
        const Nd = [],
          Wd = Dd(Jd);
        if (1 === kd.primitives.length) {
          const pd = kd.primitives[0];
          Nd.push(this.loadPrimitive(`${dd}/primitives/${pd.index}`, Wd, pd, (dd => {
            this.nodeObjects.set(Jd.index, dd), this.nodePrimitives.set(Jd.index, [dd])
          })))
        } else {
          const pd = this.node(Wd, !1);
          this.nodeObjects.set(Jd.index, pd);
          const Pd = [];
          this.nodePrimitives.set(Jd.index, Pd);
          for (const Jd of kd.primitives) Nd.push(this.loadPrimitive(`${dd}/primitives/${Jd.index}`, `${Wd}_primitive${Jd.index}`, Jd, (dd => {
            dd.parent = pd, Pd.push(dd)
          })))
        }
        const Pd = this.nodeObjects.get(Jd.index);
        return pd(Pd), Promise.all(Nd).then((() => Pd))
      }
      loadPrimitive(dd, Jd, kd, pd) {
        const Nd = [],
          Wd = this.node(Jd, !0);
        if (Wd.sideOrientation = this.BO.useRightHandedSystem ? CJ.c.CounterClockWiseSideOrientation : CJ.c.ClockWiseSideOrientation, Nd.push(this.geometryData.load(dd, kd, Wd).then((dd => {
            if ((0, dJ.h)(Wd)) {
              var Jd, kd;
              const pd = dd;
              Wd.replaceModel(pd, Int32Array.of(0, null !== (Jd = null === (kd = pd.indexData) || void 0 === kd ? void 0 : kd.length) && void 0 !== Jd ? Jd : pd.vertexCount, 0, pd.vertexCount))
            } else this.create((() => (dd.applyToMesh(Wd), dd)))
          }))), this.materials) {
          const dd = 0 === kd.mode ? CJ.c.PointListDrawMode : CJ.c.TriangleFillMode,
            Jd = null === kd.material ? null : this.asset.model.materials[kd.material];
          Nd.push(this.loadMaterial(Jd, dd, (dd => {
            Wd.material = dd
          })))
        }
        return QJ(Wd, dd), pd(Wd), Promise.all(Nd).then((() => Wd))
      }
      loadMaterial(dd, Jd, kd) {
        var pd;
        const Nd = `${null!==(pd=null===dd||void 0===dd?void 0:dd.index)&&void 0!==pd?pd:"default"}:${Jd}`;
        let Wd = this.materialData.get(Nd);
        return Wd || (Wd = this.createMaterial(dd, Jd), this.materialData.set(Nd, Wd)), kd(Wd.material), Wd.promise
      }
      createMaterial(dd, Jd) {
        const kd = dd ? dd.name || `material${dd.index}` : "__GLTFLoader._default",
          {
            style: pd,
            unlit: Nd
          } = this.materials;
        let Wd;
        const Pd = this.create((() => {
          const Pd = (0, lJ.e)({
            name: kd,
            BO: this.BO,
            sets: {
              ...(0, JJ.b)(this.asset, dd, pd, Nd),
              fillMode: Jd
            },
            unrendered: !0
          });
          return Wd = Pd.model, Pd.mirror
        }));
        let Zd = Promise.resolve();
        if (dd) {
          const Jd = `/materials/${dd.index}`,
            pd = Wd.diffuseTexture;
          if (pd && !pd.mirror) Zd = new Promise((dd => setTimeout(dd)));
          else if (pd) {
            const Nd = pd.mirror;
            Nd._parentContainer = this.container, Nd.name = `${kd} (Base Color)`, QJ(Nd, `${Jd}${dd.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Nd), Zd = (0, KJ.u)(pd)
          }
          LJ(Pd, dd.extras), QJ(Pd, Jd)
        }
        return this.tree.materials.push(Pd), {
          material: Pd,
          promise: Zd
        }
      }
    }

    function IJ() {
      PJ.f.dracoDecodes = Od.decodes, PJ.f.dracoWorkersStarted = Od.workersStarted, PJ.f.dracoMostWorkers = Od.mostWorkers
    }
    async function GJ(dd, Jd, kd, Nd, Wd) {
      try {
        return await async function(dd, Jd, kd, Nd, Wd, Pd) {
          var Zd;
          let gd;
          const Cd = null === (Zd = (0, oJ.e)()) || void 0 === Zd ? void 0 : Zd.UL,
            Kd = null !== Cd && void 0 !== Cd && Cd.yL && Jd === Cd.Wm() ? Cd : null,
            od = Wd && !Kd;
          return await wd(dd, Jd, kd, Nd, pd.c, (dd => (gd = new eJ(Jd, od), new RJ(dd, Jd, gd, od, new NJ(Jd, Nd), Pd, Kd).load())), !Wd), gd
        }(dd, Jd, kd, xd, Nd, Wd)
      } finally {
        IJ()
      }
    }
    async function vJ(dd, Jd, kd, Nd) {
      try {
        return await wd(dd, Jd, kd, xd, pd.c, (dd => Nd(dd, new NJ(Jd, xd))))
      } finally {
        IJ()
      }
    }
    WJ = Nd.b, Kd || (Kd = {
      scriptUrl: new URL(WJ.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(WJ.wasmBinaryUrl, location.href).href
    })
  },
  41462: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(126),
      Nd = kd(1227);

    function Wd(dd) {
      return (0, pd.e)() ? `https://${Nd.b.discordDomain}/${dd.href}` : dd.href
    }
    const Pd = {
      scriptUrl: Wd(new kd.U(kd(41467))),
      wasmBinaryUrl: Wd(new kd.U(kd(41475)))
    }
  },
  36432: dd => {
    dd.exports = function(dd, Jd, kd, pd) {
      var Nd = self || window;
      try {
        try {
          var Wd;
          try {
            Wd = new Nd.Blob([dd])
          } catch (Cd) {
            (Wd = new(Nd.BlobBuilder || Nd.WebKitBlobBuilder || Nd.MozBlobBuilder || Nd.MSBlobBuilder)).append(dd), Wd = Wd.getBlob()
          }
          var Pd = Nd.URL || Nd.webkitURL,
            Zd = Pd.createObjectURL(Wd),
            gd = new Nd[Jd](Zd, kd);
          return Pd.revokeObjectURL(Zd), gd
        } catch (Cd) {
          return new Nd[Jd]("data:application/javascript,".concat(encodeURIComponent(dd)), kd)
        }
      } catch (Cd) {
        if (!pd) throw Error("Inline worker is not supported");
        return new Nd[Jd](pd, kd)
      }
    }
  },
  41467: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41475: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);
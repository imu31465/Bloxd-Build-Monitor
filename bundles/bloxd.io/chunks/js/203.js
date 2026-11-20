export const id = 203;
export const ids = [203];
export const modules = {
  40783: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      loadGlbAsset: () => Gz,
      loadGlbTree: () => cz
    });
    var hv = Pv(37431),
      Sv = Pv(40789),
      ev = Pv(35833),
      gv = Pv.n(ev);

    function pv() {
      return gv()('(()=>{class vv extends Error{}function zv(zv,Pv){const hv=zv._malloc(Pv);if(0===hv)throw new vv(`Draco: the decoder\'s heap refused ${Pv} bytes`);return hv}function Pv(vv){return{[vv.DT_FLOAT32]:[Float32Array,5126],[vv.DT_INT8]:[Int8Array,5120],[vv.DT_INT16]:[Int16Array,5122],[vv.DT_INT32]:[Int32Array,5124],[vv.DT_UINT8]:[Uint8Array,5121],[vv.DT_UINT16]:[Uint16Array,5123],[vv.DT_UINT32]:[Uint32Array,5125]}}function hv(zv,hv,Sv,ev,gv){let pv=null,dv=null,Nv=null;try{pv=new zv.Decoder,dv=new zv.DecoderBuffer,dv.Init(hv,hv.byteLength);let lv=0;const Tv=pv.GetEncodedGeometryType(dv);if(Tv===zv.TRIANGULAR_MESH){const Pv=new zv.Mesh;Nv=Pv;const hv=pv.DecodeBufferToMesh(dv,Pv);if(!hv.ok()||0===Pv.ptr)throw new vv(hv.error_msg());lv=3*Pv.num_faces()}else{if(Tv!==zv.POINT_CLOUD)throw new vv(`Draco: Cannot decode invalid geometry type ${Tv}`);{const Pv=new zv.PointCloud;Nv=Pv;const hv=pv.DecodeBufferToPointCloud(dv,Pv);if(!hv.ok()||!Pv.ptr)throw new vv(hv.error_msg())}}const Wv=Nv.num_points();if(Wv!==ev.vertices||lv!==ev.indices)throw new vv(`Draco: decoded ${Wv} vertices and ${lv} indices, the accessors declare ${ev.vertices} and ${ev.indices}`);const wv=Pv(zv),av=[];for(const{kind:zv,id:Pv,components:hv}of Sv){const Sv=pv.GetAttributeByUniqueId(Nv,Pv);if(!Sv||0===Sv.ptr)throw new vv(`Draco: no attribute with id ${Pv} (${zv})`);const ev=Sv.data_type();if(!wv[ev])throw new vv(`Draco: Cannot decode invalid data type ${ev}`);if(Sv.num_components()!==hv)throw new vv(`Draco: ${zv} decodes to ${Sv.num_components()} components, its accessor declares ${hv}`);av.push([zv,Sv,ev])}return gv({dracoDecoder:pv,geometry:Nv,triangles:Tv===zv.TRIANGULAR_MESH,numPoints:Wv,numIndices:lv,attributes:av})}finally{Nv&&zv.destroy(Nv),dv&&zv.destroy(dv),pv&&zv.destroy(pv)}}const Sv=self;let ev=null;self.onmessage=vv=>{let{data:gv}=vv;if("init"===gv.id){try{importScripts(gv.url),ev=DracoDecoderModule({wasmBinary:gv.wasmBinary}),Sv.postMessage({id:"initDone"})}catch(Tv){Sv.postMessage({id:"initError",message:Tv instanceof Error?Tv.message:String(Tv)})}return}const{seq:pv,data:dv,attributeIds:Nv,expected:lv}=gv;ev?ev.then((vv=>{try{const ev=function(vv,Sv,ev,gv){const pv=Object.keys(ev).map((vv=>({kind:vv,id:ev[vv],components:gv.components[vv]})));return hv(vv,Sv,pv,gv,(hv=>{let{dracoDecoder:Sv,geometry:ev,triangles:gv,numPoints:pv,numIndices:dv,attributes:Nv}=hv;const lv=Pv(vv);let Tv=null;if(gv){const Pv=4*dv,hv=zv(vv,Pv);try{Sv.GetTrianglesUInt32Array(ev,Pv,hv),Tv=new Uint32Array(dv),Tv.set(new Uint32Array(vv.HEAPF32.buffer,hv,dv))}finally{vv._free(hv)}}const Wv=[];for(const[Pv,wv,av]of Nv){const[hv]=lv[av],gv=wv.num_components(),dv=pv*gv,Nv=dv*hv.BYTES_PER_ELEMENT,Tv=zv(vv,Nv);try{Sv.GetAttributeDataArrayForAllPoints(ev,wv,av,Nv,Tv),Wv.push({kind:Pv,data:new hv(vv.HEAPF32.buffer,Tv,dv).slice(),size:gv,byteOffset:wv.byte_offset(),byteStride:wv.byte_stride(),normalized:wv.normalized()})}finally{vv._free(Tv)}}return{indices:Tv,attributes:Wv,totalVertices:pv}}))}(vv,dv,Nv,lv),gv=ev.attributes.map((vv=>vv.data.buffer));ev.indices&&gv.push(ev.indices.buffer),Sv.postMessage({id:"decoded",seq:pv,...ev},gv)}catch(Tv){Sv.postMessage({id:"decodeError",seq:pv,message:Tv instanceof Error?Tv.message:String(Tv)})}}),(vv=>{Sv.postMessage({id:"decodeError",seq:pv,message:vv instanceof Error?vv.message:String(vv)})})):Sv.postMessage({id:"decodeError",seq:pv,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, Pv.p + "dracoDecode.worker.d462e957.worker.js")
    }
    var dv = Pv(73);
    const Nv = 1e3;
    let lv = null,
      Tv = null;
    const Wv = [],
      wv = [];
    let av = 0;
    const sv = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      Cv = function(vv, zv) {
        const Pv = vv ? Math.max(1, Math.min(Math.floor(.5 * vv), 4)) : 1;
        return zv ? Math.min(Pv, 2) : Pv
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, dv.isMobile)());

    function iv() {
      if (!lv) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: vv,
        wasmBinaryUrl: zv
      } = lv;
      return Tv ??= fetch(zv).then((vv => {
        if (!vv.ok) throw new Error(`Draco: fetching ${zv} failed: ${vv.status}`);
        return vv.arrayBuffer()
      })), Tv.catch((() => {
        Tv = null
      })), sv.workersStarted++, Tv.then((zv => new Promise(((Pv, hv) => {
        const Sv = new pv;
        Sv.onerror = vv => {
          Sv.onmessage = null, Sv.onerror = null, Sv.terminate(), hv(new Error("Draco: the decode worker failed to start" + (vv.message ? `: ${vv.message}` : " (its script did not load)")))
        }, Sv.onmessage = vv => {
          let {
            data: zv
          } = vv;
          Sv.onmessage = null, Sv.onerror = null, "initDone" === zv.id ? Pv(Sv) : (Sv.terminate(), hv(new Error(`Draco: ${"initError"===zv.id?zv.message:"the worker did not start"}`)))
        };
        const ev = zv.slice(0),
          gv = {
            id: "init",
            url: vv,
            wasmBinary: ev
          };
        Sv.postMessage(gv, [ev])
      }))))
    }

    function cv(vv) {
      const zv = Wv.indexOf(vv); - 1 !== zv && Wv.splice(zv, 1);
      const Pv = wv.shift();
      Pv && mv(Pv)
    }

    function Gv(vv, zv) {
      vv.busy = !0, vv.releaseTimer && (clearTimeout(vv.releaseTimer), vv.releaseTimer = null);
      vv.worker.then((Pv => {
        const hv = av++;
        Pv.onmessage = Sv => {
          let {
            data: ev
          } = Sv;
          if (("decoded" === ev.id || "decodeError" === ev.id) && ev.seq === hv) {
            if (Pv.onmessage = null, Pv.onerror = null, "decoded" === ev.id) return sv.decodes++, zv.resolve({
              indices: ev.indices,
              attributes: ev.attributes,
              totalVertices: ev.totalVertices
            }), void(() => {
              const zv = wv.shift();
              zv ? Gv(vv, zv) : (vv.busy = !1, vv.releaseTimer = setTimeout((() => {
                const zv = Wv.indexOf(vv); - 1 !== zv && Wv.splice(zv, 1), vv.worker.then((vv => {
                  vv.terminate()
                }))
              }), Nv))
            })();
            Pv.terminate(), zv.reject(new Error(ev.message)), cv(vv)
          }
        }, Pv.onerror = hv => {
          Pv.onmessage = null, Pv.onerror = null, Pv.terminate(), zv.reject(new Error(`Draco: the decode worker failed: ${hv.message}`)), cv(vv)
        };
        const Sv = {
          id: "decode",
          seq: hv,
          data: zv.data,
          attributeIds: zv.attributeIds,
          expected: zv.expected
        };
        Pv.postMessage(Sv, [zv.data.buffer])
      }), (Pv => {
        zv.reject(Pv instanceof Error ? Pv : new Error(String(Pv))), cv(vv)
      }))
    }

    function mv(vv) {
      const zv = Wv.find((vv => !vv.busy));
      if (zv) Gv(zv, vv);
      else {
        if (Wv.length < Cv) {
          const zv = {
            worker: iv(),
            busy: !0,
            releaseTimer: null
          };
          return Wv.push(zv), sv.mostWorkers = Math.max(sv.mostWorkers, Wv.length), void Gv(zv, vv)
        }
        wv.push(vv)
      }
    }

    function jv(vv, zv, Pv) {
      return new Promise(((hv, Sv) => {
        mv({
          data: new Int8Array(vv.buffer, vv.byteOffset, vv.byteLength).slice(),
          attributeIds: zv,
          expected: Pv,
          resolve: hv,
          reject: Sv
        })
      }))
    }
    var fv = Pv(36948),
      Fv = Pv(36964),
      Yv = Pv(9087),
      nv = Pv(9078);
    const Ov = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Dv(vv) {
      const zv = (0, nv.i)(vv.byteLength);
      if (zv) throw new Yv.q(zv);
      const {
        json: Pv,
        bin: hv
      } = (0, Yv.H)(vv), Sv = (0, nv.g)(Pv, hv);
      if (Sv) throw new Yv.q(Sv);
      try {
        return function(vv, zv) {
          var Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv;
          const iv = new Map,
            cv = Pv => {
              let hv = iv.get(Pv);
              if (!hv) {
                var Sv;
                const ev = vv.bufferViews[Pv],
                  gv = null !== (Sv = ev.byteOffset) && void 0 !== Sv ? Sv : 0;
                hv = {
                  index: Pv,
                  bytes: zv.subarray(gv, gv + ev.byteLength),
                  byteStride: ev.byteStride
                }, iv.set(Pv, hv)
              }
              return hv
            },
            Gv = new Map,
            mv = zv => {
              let Pv = Gv.get(zv);
              if (!Pv) {
                var hv;
                const Sv = vv.accessors[zv];
                Pv = {
                  index: zv,
                  count: Sv.count,
                  type: Sv.type,
                  numComponents: Yv.t[Sv.type],
                  componentType: Sv.componentType,
                  normalized: null !== (hv = Sv.normalized) && void 0 !== hv && hv,
                  byteOffset: Sv.byteOffset,
                  bufferView: void 0 === Sv.bufferView ? null : cv(Sv.bufferView),
                  min: Sv.min,
                  max: Sv.max
                }, Gv.set(zv, Pv)
              }
              return Pv
            },
            jv = null !== (Pv = null === (hv = vv.extensionsUsed) || void 0 === hv ? void 0 : hv.includes("KHR_draco_mesh_compression")) && void 0 !== Pv && Pv,
            fv = (null !== (Sv = vv.meshes) && void 0 !== Sv ? Sv : []).map(((zv, Pv) => {
              const hv = zv.primitives.map(((zv, Pv) => {
                var hv, Sv, ev;
                const gv = jv ? null === (hv = zv.extensions) || void 0 === hv ? void 0 : hv.KHR_draco_mesh_compression : void 0;
                let pv = null;
                const dv = [];
                if (gv) {
                  const Pv = {
                    vertices: vv.accessors[zv.attributes.POSITION].count,
                    indices: void 0 === zv.indices ? 0 : vv.accessors[zv.indices].count,
                    components: {}
                  };
                  pv = {
                    bufferView: cv(gv.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: Pv
                  };
                  for (const [hv, Sv] of Yv.j) {
                    const ev = gv.attributes[hv];
                    if (void 0 === ev) continue;
                    pv.attributeIds[Sv] = ev;
                    const dv = zv.attributes[hv];
                    var Nv;
                    if (void 0 !== dv) pv.normalized[Sv] = null !== (Nv = vv.accessors[dv].normalized) && void 0 !== Nv && Nv, Pv.components[Sv] = Yv.t[vv.accessors[dv].type]
                  }
                } else
                  for (const [vv, lv] of Yv.j) {
                    const Pv = zv.attributes[vv];
                    void 0 !== Pv && dv.push({
                      semantic: vv,
                      kind: lv,
                      accessor: mv(Pv)
                    })
                  }
                return {
                  index: Pv,
                  mode: null !== (Sv = zv.mode) && void 0 !== Sv ? Sv : 4,
                  attributes: dv,
                  indices: gv || void 0 === zv.indices ? null : mv(zv.indices),
                  position: void 0 === zv.attributes.POSITION ? null : mv(zv.attributes.POSITION),
                  material: null !== (ev = zv.material) && void 0 !== ev ? ev : null,
                  draco: pv
                }
              }));
              return {
                index: Pv,
                name: zv.name,
                primitives: hv,
                extras: zv.extras
              }
            })),
            Fv = (null !== (ev = vv.nodes) && void 0 !== ev ? ev : []).map(((vv, zv) => {
              var Pv, hv;
              return {
                index: zv,
                name: vv.name,
                children: null !== (Pv = vv.children) && void 0 !== Pv ? Pv : [],
                mesh: null !== (hv = vv.mesh) && void 0 !== hv ? hv : null,
                translation: vv.translation,
                rotation: vv.rotation,
                scale: vv.scale,
                hasCamera: void 0 !== vv.camera,
                extras: vv.extras
              }
            })),
            nv = null !== (gv = null === (pv = vv.extensionsUsed) || void 0 === pv ? void 0 : pv.includes("KHR_materials_unlit")) && void 0 !== gv && gv,
            Dv = null !== (dv = null === (Nv = vv.extensionsUsed) || void 0 === Nv ? void 0 : Nv.includes("KHR_texture_transform")) && void 0 !== dv && dv,
            Kv = (null !== (lv = vv.materials) && void 0 !== lv ? lv : []).map(((vv, zv) => {
              var Pv, hv, Sv, ev;
              const gv = vv.pbrMetallicRoughness,
                pv = null === gv || void 0 === gv ? void 0 : gv.baseColorTexture;
              return {
                index: zv,
                name: vv.name,
                extras: vv.extras,
                unlit: nv && void 0 !== (null === (Pv = vv.extensions) || void 0 === Pv ? void 0 : Pv.KHR_materials_unlit),
                pbr: gv ? {
                  baseColorFactor: gv.baseColorFactor,
                  metallicFactor: gv.metallicFactor,
                  roughnessFactor: gv.roughnessFactor
                } : null,
                baseColorTexture: pv ? {
                  texture: pv.index,
                  transform: Dv && (null === (hv = pv.extensions) || void 0 === hv ? void 0 : hv.KHR_texture_transform) || null
                } : null,
                emissiveFactor: vv.emissiveFactor,
                alphaMode: null !== (Sv = vv.alphaMode) && void 0 !== Sv ? Sv : "OPAQUE",
                alphaCutoff: vv.alphaCutoff,
                doubleSided: null !== (ev = vv.doubleSided) && void 0 !== ev && ev
              }
            })),
            Vv = (null !== (Tv = vv.textures) && void 0 !== Tv ? Tv : []).map(((zv, Pv) => {
              var hv, Sv;
              const ev = void 0 === zv.sampler ? Ov : {
                index: zv.sampler,
                ...null === (hv = vv.samplers) || void 0 === hv ? void 0 : hv[zv.sampler]
              };
              return {
                index: Pv,
                sampler: {
                  index: ev.index,
                  magFilter: ev.magFilter,
                  minFilter: ev.minFilter,
                  wrapS: ev.wrapS,
                  wrapT: ev.wrapT
                },
                image: null !== (Sv = zv.source) && void 0 !== Sv ? Sv : -1
              }
            })),
            Uv = (null !== (Wv = vv.images) && void 0 !== Wv ? Wv : []).map(((vv, zv) => ({
              index: zv,
              name: vv.name,
              mimeType: vv.mimeType,
              bufferView: cv(vv.bufferView)
            }))),
            Rv = null !== (wv = (0, Yv.D)(vv)) && void 0 !== wv ? wv : 0;
          return {
            json: vv,
            rootNodes: null !== (av = null === (sv = vv.scenes) || void 0 === sv || null === (Cv = sv[Rv]) || void 0 === Cv ? void 0 : Cv.nodes) && void 0 !== av ? av : [],
            nodes: Fv,
            meshes: fv,
            materials: Kv,
            textures: Vv,
            images: Uv
          }
        }(Pv, hv)
      } catch (ev) {
        throw ev instanceof Yv.n ? ev : new Yv.n(`reading the GLB failed: ${ev instanceof Error?ev.message:String(ev)}`)
      }
    }
    async function Kv(vv, zv) {
      var Pv, hv;
      const Sv = vv.draco;
      if (!Sv) throw new Yv.n("not a Draco primitive");
      let ev;
      try {
        ev = await zv(Sv.bufferView.bytes, Sv.attributeIds, Sv.expected)
      } catch (Nv) {
        throw new Yv.n(`Draco decoding failed: ${Nv instanceof Error?Nv.message:String(Nv)}`)
      }
      const {
        vertices: gv,
        indices: pv,
        components: dv
      } = Sv.expected;
      if (ev.totalVertices !== gv || (null !== (Pv = null === (hv = ev.indices) || void 0 === hv ? void 0 : hv.length) && void 0 !== Pv ? Pv : 0) !== pv || ev.attributes.some((vv => vv.size !== dv[vv.kind] || vv.data.length !== gv * vv.size))) throw new Yv.n("Draco decoding gave other counts than the accessors declare");
      for (const lv of ev.attributes) {
        const vv = Sv.normalized[lv.kind];
        void 0 !== vv && (lv.normalized = vv)
      }
      return ev
    }
    const Vv = new WeakMap;

    function Uv(vv, zv) {
      var Pv;
      const hv = null !== (Pv = Vv.get(vv)) && void 0 !== Pv ? Pv : zv(vv);
      return Vv.set(vv, hv), hv
    }

    function Rv(vv) {
      const zv = vv.bufferView,
        Pv = 5125 === vv.componentType ? Uint32Array : Uint16Array,
        hv = zv.bytes.buffer,
        Sv = zv.bytes.byteOffset + (vv.byteOffset || 0);
      return Sv % Pv.BYTES_PER_ELEMENT !== 0 ? new Pv(hv.slice(Sv, Sv + vv.count * Pv.BYTES_PER_ELEMENT), 0) : new Pv(hv, Sv, vv.count)
    }

    function xv(vv, zv) {
      if (vv.min && vv.max) return [new Float64Array(vv.min), new Float64Array(vv.max)];
      const Pv = zv.find((vv => {
          let {
            kind: zv
          } = vv;
          return "position" === zv
        })),
        hv = Pv ? (0, Fv.j)(Pv, vv.count) : new Float32Array(0);
      return (0, Fv.w)(hv.length / 3, ((vv, zv) => hv[3 * vv + zv]))
    }

    function tv(vv) {
      const zv = vv.attributes.map((vv => {
          var zv, Pv;
          let {
            kind: hv,
            accessor: Sv
          } = vv;
          const {
            bufferView: ev,
            numComponents: gv
          } = Sv;
          if (!ev) {
            return {
              kind: hv,
              data: Uv(Sv, (() => new Float32Array(gv * Sv.count))),
              offset: 0,
              stride: 4 * gv,
              components: gv,
              glType: 5126,
              isNormalized: !1
            }
          }
          const pv = null !== (zv = ev.byteStride) && void 0 !== zv ? zv : gv * Yv.d[Sv.componentType];
          return {
            kind: hv,
            data: ev.bytes,
            offset: null !== (Pv = Sv.byteOffset) && void 0 !== Pv ? Pv : 0,
            stride: pv,
            components: gv,
            glType: Sv.componentType,
            isNormalized: Sv.normalized
          }
        })),
        Pv = vv.indices,
        hv = Pv && Uv(Pv, Rv),
        Sv = vv.position;
      return new Fv.g(zv, hv, Sv.count, ...xv(Sv, zv))
    }
    const qv = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function Iv(vv, zv) {
      const Pv = zv.attributes.map((vv => {
        let {
          kind: zv,
          data: Pv,
          size: hv,
          byteOffset: Sv,
          byteStride: ev,
          normalized: gv
        } = vv;
        return {
          kind: zv,
          data: Pv,
          offset: Sv,
          stride: ev,
          components: hv,
          glType: 5120 + qv.indexOf(Pv.constructor),
          isNormalized: gv
        }
      }));
      return new Fv.g(Pv, zv.indices, zv.totalVertices, ...xv(vv.position, Pv))
    }

    function Qv(vv) {
      const zv = vv.lastIndexOf("/");
      return zv < 0 ? vv : vv.substring(zv + 1)
    }

    function Zv(vv) {
      const zv = vv.lastIndexOf("/");
      return zv < 0 ? "" : vv.substring(0, zv + 1)
    }

    function Av(vv) {
      return vv.name || `node${vv.index}`
    }
    const Lv = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      Hv = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      Mv = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function yv(vv) {
      var zv, Pv, hv, Sv;
      const ev = null !== (zv = vv.minFilter) && void 0 !== zv ? zv : 9987;
      return 9729 === (null !== (Pv = vv.magFilter) && void 0 !== Pv ? Pv : 9729) ? null !== (hv = Hv[ev]) && void 0 !== hv ? hv : 3 : null !== (Sv = Mv[ev]) && void 0 !== Sv ? Sv : 4
    }
    const Bv = {
      33071: 0,
      33648: 2
    };

    function Jv(vv) {
      var zv;
      return null !== (zv = Bv[null !== vv && void 0 !== vv ? vv : 10497]) && void 0 !== zv ? zv : 1
    }

    function Ev(vv) {
      return 9728 === vv.minFilter || 9729 === vv.minFilter
    }

    function ov(vv) {
      var zv, Pv, hv;
      const Sv = Float64Array.from(null !== (zv = vv.scale) && void 0 !== zv ? zv : [1, 1, 1]);
      return vv.hasCamera && (Sv[0] = -1), {
        translation: Float64Array.from(null !== (Pv = vv.translation) && void 0 !== Pv ? Pv : [0, 0, 0]),
        rotation: Float64Array.from(null !== (hv = vv.rotation) && void 0 !== hv ? hv : [0, 0, 0, 1]),
        scale: Sv
      }
    }

    function bv(vv, zv) {
      let {
        translation: Pv,
        rotation: hv,
        scale: Sv
      } = vv;
      const ev = new Float32Array(16);
      return (0, fv.b)(Sv, 0, hv, 0, Pv, 0, ev), zv && (0, fv.k)(ev, zv, 0, ev), ev
    }
    class rv {
      constructor(vv, zv, Pv, hv) {
        this.model = vv, this.decode = zv, this.fileInfo = Pv, this.uniqueRootUrl = hv, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Sv = new Set,
          ev = (zv, Pv) => {
            const hv = vv.nodes[zv];
            if (this.parents.has(hv)) throw new Yv.n(`/nodes/${zv}: Invalid recursive node hierarchy`);
            this.parents.set(hv, Pv);
            const gv = null === hv.mesh ? [] : vv.meshes[hv.mesh].primitives,
              pv = gv.map((vv => {
                const zv = gv.length > 1;
                return {
                  name: zv ? `${Av(hv)}_primitive${vv.index}` : Av(hv),
                  node: hv,
                  primitive: vv,
                  part: zv,
                  geometry: null
                }
              }));
            this.uses.set(hv, pv);
            const dv = null !== hv.mesh && Sv.has(hv.mesh);
            Sv.add(hv.mesh), this.own.set(hv, dv ? [] : pv);
            for (const vv of hv.children) ev(vv, hv)
          };
        for (const gv of vv.rootNodes) ev(gv, null);
        this.primitives = vv.nodes.flatMap((vv => {
          var zv;
          return null !== (zv = this.own.get(vv)) && void 0 !== zv ? zv : []
        }))
      }
      decodeGeometries() {
        const vv = new Map;
        return Promise.all(this.primitives.map((async zv => {
          const {
            primitive: Pv
          } = zv, hv = Pv.draco;
          let Sv = hv ? vv.get(hv.bufferView.index) : Promise.resolve(tv(Pv));
          Sv || (Sv = Kv(Pv, this.decode).then((vv => Iv(Pv, vv))), vv.set(hv.bufferView.index, Sv)), zv.geometry = await Sv
        })))
      }
      parentOf(vv) {
        var zv;
        return null !== (zv = this.parents.get(vv)) && void 0 !== zv ? zv : null
      }
      meshesUnder(vv) {
        const zv = this.model.nodes.filter((vv => this.uses.has(vv)));
        for (const hv of zv) {
          const zv = this.uses.get(hv),
            Pv = zv.find((zv => zv.name === vv));
          if (Pv) return 1 === zv.length ? this.subtree(hv) : this.own.get(hv).includes(Pv) ? [Pv] : []
        }
        const Pv = zv.find((zv => 1 !== this.uses.get(zv).length && Av(zv) === vv));
        return Pv ? this.subtree(Pv) : null
      }
      subtree(vv) {
        return [...this.own.get(vv), ...vv.children.flatMap((vv => this.subtree(this.model.nodes[vv])))]
      }
      worldMatrix(vv, zv, Pv) {
        let hv = bv(ov(zv ? Lv : {}), null);
        const Sv = [];
        for (let gv = vv.part ? vv.node : this.parentOf(vv.node); gv; gv = this.parentOf(gv)) Sv.unshift(gv);
        for (const gv of Sv) hv = bv(ov(gv), hv);
        const ev = ov(vv.part ? {} : vv.node);
        return void 0 !== Pv && ev.scale.fill(Pv), bv(ev, hv)
      }
      floats(vv) {
        const {
          vertexAttributes: zv,
          vertexCount: Pv
        } = vv.geometry;
        return new Map(zv.map((vv => [vv.kind, (0, Fv.j)(vv, Pv)])))
      }
      imageUrl(vv) {
        return function(vv, zv, Pv) {
          let {
            name: hv
          } = zv;
          return `data:${vv}${hv}#image${Pv}`
        }(this.uniqueRootUrl, this.fileInfo, vv)
      }
      textureDesc(vv, zv) {
        var Pv;
        let {
          texture: hv,
          transform: Sv
        } = vv;
        const {
          sampler: ev,
          image: gv
        } = this.model.textures[hv], {
          bufferView: pv,
          mimeType: dv,
          name: Nv
        } = this.model.images[gv], lv = Sv && {
          ...Sv.offset ? {
            uOffset: Sv.offset[0],
            vOffset: Sv.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Sv.rotation ? {
            wAng: -Sv.rotation
          } : {},
          ...Sv.scale ? {
            uScale: Sv.scale[0],
            vScale: Sv.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(gv),
          noMipmap: Ev(ev),
          invertY: !1,
          samplingMode: yv(ev),
          data: {
            bytes: pv.bytes,
            mimeType: dv,
            label: Nv,
            context: `/textures/${hv}`
          },
          sets: {
            wrapU: Jv(ev.wrapS),
            wrapV: Jv(ev.wrapT),
            ...lv,
            coordinatesIndex: null !== (Pv = null === Sv || void 0 === Sv ? void 0 : Sv.texCoord) && void 0 !== Pv ? Pv : 0,
            hasAlpha: zv
          }
        }
      }
    }
    async function kv(vv, zv, Pv, hv, Sv, ev) {
      let gv = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const pv = function(vv, zv, Pv) {
          return "string" !== typeof zv ? {
            url: "",
            rootUrl: vv,
            name: Pv()
          } : zv ? zv.startsWith("data:") ? {
            url: zv,
            rootUrl: vv,
            name: ""
          } : vv ? {
            url: vv + zv,
            rootUrl: vv,
            name: zv
          } : {
            url: zv,
            rootUrl: Zv(zv),
            name: Qv(zv)
          } : {
            url: vv,
            rootUrl: Zv(vv),
            name: Qv(vv)
          }
        }(Pv, vv, Sv),
        dv = {};
      zv.addPendingData(dv);
      try {
        const Pv = Dv(await async function(vv, zv) {
            return "string" !== typeof zv ? zv : vv.url.startsWith("data:") ? (0, Yv.x)(vv.url) : await (0, Yv.A)(vv.url)
          }(pv, vv)),
          dv = new rv(Pv, hv, pv, function(vv, zv) {
            let {
              rootUrl: Pv,
              name: hv
            } = vv;
            return !Pv.startsWith("file:") && hv ? Pv : `${Pv}${zv()}/`
          }(pv, Sv));
        return await ev(dv), zv.importedMeshesFiles && (zv.loadingPluginName = "nD", gv && zv.importedMeshesFiles.push(pv.url)), dv
      } finally {
        zv.removePendingData(dv)
      }
    }
    var Xv = Pv(37086),
      uv = Pv(36918),
      vz = Pv(37421);

    function zz(vv) {
      if (null === vv || void 0 === vv || !vv.min || !vv.max) return null;
      const [zv, Pv, hv] = vv.min, [Sv, ev, gv] = vv.max, {
        BoundingInfo: pv,
        fa: dv
      } = (0, Xv.c)();
      return new pv(new dv(zv, Pv, hv), new dv(Sv, ev, gv))
    }

    function Pz(vv) {
      (0, uv.f)(vv) || (vv.geometry && vv.geometry.useBoundingInfoFromGeometry ? vv._updateBoundingInfo() : vv.refreshBoundingInfo(!0, !0))
    }
    class hz {
      constructor(vv, zv) {
        this.Is = vv, this.decode = zv, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(vv) {
        let zv = this.viewData.get(vv.index);
        return zv || (zv = this.bufferData.then((() => vv.bytes)), this.viewData.set(vv.index, zv)), zv
      }
      viewBuffer(vv) {
        let zv = this.viewBuffers.get(vv.index);
        return zv || (zv = this.viewBytes(vv).then((vv => new((0, Xv.c)().Sa)(this.Is.ma(), vv, !1))), this.viewBuffers.set(vv.index, zv)), zv
      }
      vertexBuffer(vv, zv) {
        const {
          kind: Pv,
          data: hv
        } = zv, Sv = `${vv.index}:${Pv}`;
        let ev = this.vertexBuffers.get(Sv);
        if (!ev) {
          const gv = vv.bufferView;
          ev = gv ? this.viewBuffer(gv).then((vv => this.layoutVertexBuffer(vv, zv))) : Promise.resolve(hv).then((vv => new((0, Xv.c)().VertexBuffer)(this.Is.ma(), vv, Pv, !1))), this.vertexBuffers.set(Sv, ev)
        }
        return ev
      }
      layoutVertexBuffer(vv, zv) {
        let {
          kind: Pv,
          offset: hv,
          stride: Sv,
          components: ev,
          glType: gv,
          isNormalized: pv
        } = zv;
        const dv = this.Is.ma();
        return new((0, Xv.c)().VertexBuffer)(dv, vv, Pv, !1, void 0, Sv, void 0, hv, ev, gv, pv, !0, void 0, !0)
      }
      load(vv, zv, Pv) {
        const hv = (0, uv.f)(Pv),
          Sv = vv => {
            hv || (Pv._delayInfo = Pv._delayInfo || [], -1 === Pv._delayInfo.indexOf(vv) && Pv._delayInfo.push(vv))
          },
          ev = zv.draco;
        if (ev) {
          for (const vv in ev.attributeIds) Sv(vv);
          let gv = this.dracoGeometry.get(ev.bufferView.index);
          return gv || (gv = this.viewBytes(ev.bufferView).then((async () => {
            let Sv;
            try {
              Sv = await Kv(zv, this.decode)
            } catch (dv) {
              throw new Yv.n(`${vv}: ${dv instanceof Error?dv.message:String(dv)}`)
            }
            const ev = Iv(zv, Sv);
            if (hv) return ev;
            const gv = zz(zv.position),
              pv = new((0, Xv.c)().MirroredGeometry)(Pv.name, this.Is);
            gv && (pv._boundingInfo = gv, pv.useBoundingInfoFromGeometry = !0), ev.indexData && pv.setIndices(ev.indexData);
            for (const vv of ev.vertexAttributes) pv.setVerticesBuffer(this.layoutVertexBuffer(vv.data, vv), ev.vertexCount);
            return pv.link(ev), pv
          })), this.dracoGeometry.set(ev.bufferView.index, gv)), gv
        }
        const gv = [],
          pv = tv(zv);
        if (hv) return Pv.isUnIndexed = !pv.indexData, Pv.hasVertexAlpha = (0, vz.f)(zv), Promise.resolve(pv);
        const dv = new((0, Xv.c)().MirroredGeometry)(Pv.name, this.Is),
          {
            indexData: Nv
          } = pv;
        Nv ? gv.push(this.viewBytes(zv.indices.bufferView).then((() => {
          dv.setIndices(Nv)
        }))) : Pv.isUnIndexed = !0;
        for (const [lv, {
            kind: Tv,
            accessor: Wv
          }] of zv.attributes.entries()) Sv(Tv), gv.push(this.vertexBuffer(Wv, pv.vertexAttributes[lv]).then((vv => {
          if ("position" === vv.getKind()) {
            const vv = zz(Wv);
            vv && (dv._boundingInfo = vv, dv.useBoundingInfoFromGeometry = !0)
          }
          dv.setVerticesBuffer(vv, pv.vertexCount)
        })));
        return (0, vz.f)(zv) && (Pv.hasVertexAlpha = !0), Promise.all(gv).then((() => (dv.link(pv), dv)))
      }
    }
    var Sz, ez = Pv(36792),
      gz = Pv(36591),
      pz = Pv(37428),
      dz = Pv(36743),
      Nz = Pv(36775),
      lz = Pv(2599),
      Tz = Pv(36764);

    function Wz(vv, zv) {
      vv.metadata = vv.metadata || {};
      const Pv = vv._internalMetadata = vv._internalMetadata || {},
        hv = Pv.nD = Pv.nD || {};
      (hv.pointers = hv.pointers || []).push(zv)
    }

    function wz(vv, zv) {
      if (zv && Object.keys(zv).length > 0) {
        const Pv = vv.metadata = vv.metadata || {};
        (Pv.nD = Pv.nD || {}).extras = zv
      }
    }

    function az(vv, zv) {
      zv.position = vv.translation ? gz.fa.FromArray(vv.translation) : gz.fa.Zero(), zv.rotationQuaternion = vv.rotation ? gz.Quaternion.FromArray(vv.rotation) : gz.Quaternion.Identity(), zv.pp = vv.scale ? gz.fa.FromArray(vv.scale) : gz.fa.One()
    }
    class sz {
      constructor(vv, zv) {
        if (this.Is = vv, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, zv) {
          const zv = vv.ma(),
            Pv = vv.uD.add((() => {
              this.dispose()
            })),
            hv = zv.onContextRestoredObservable.add((() => {
              for (const vv of [...this.geometries, ...this.meshes, ...this.textures]) vv._rebuild()
            }));
          this.release = () => {
            vv.uD.remove(Pv), zv.onContextRestoredObservable.remove(hv)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const vv of this.meshes) this.Is.NPv(vv);
          for (const vv of this.materials) this.Is.addMaterial(vv);
          for (const vv of this.geometries) this.Is.addGeometry(vv);
          for (const vv of this.transformNodes) this.Is.addTransformNode(vv);
          for (const vv of this.textures) this.Is.addTexture(vv)
        }
      }
      dispose() {
        var vv;
        for (const zv of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const vv of zv.slice()) vv.dispose();
          zv.length = 0
        }
        null === (vv = this.release) || void 0 === vv || vv.call(this), this.release = null
      }
    }
    class Cz {
      constructor(vv, zv, Pv, hv, Sv, ev, gv) {
        this.asset = vv, this.Is = zv, this.tree = Pv, this.geometryData = Sv, this.materials = ev, this.lite = gv, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = hv ? Pv : null
      }
      create(vv) {
        if (this.lite) return vv();
        const zv = this.Is;
        zv._blockEntityCollection = !!this.container;
        try {
          const zv = vv();
          return this.container && (zv._parentContainer = this.container), zv
        } finally {
          zv._blockEntityCollection = !1
        }
      }
      node(vv, zv) {
        return this.create((() => this.lite ? zv ? (0, pz.f)(this.lite, vv) : (0, pz.s)(this.lite, vv) : zv ? new((0, Xv.c)().Mesh)(vv, this.Is) : new((0, Xv.c)().TransformNode)(vv, this.Is)))
      }
      async load() {
        var vv;
        this.asset.model.json.nodes && this.createRoot();
        const zv = this.lite ? null : this.Is,
          Pv = null !== (vv = null === zv || void 0 === zv ? void 0 : zv.blockMaterialDirtyMechanism) && void 0 !== vv && vv;
        let hv;
        zv && (zv.blockMaterialDirtyMechanism = !0);
        try {
          hv = this.loadScene()
        } finally {
          null === zv || void 0 === zv || zv._forceBlockMaterialDirtyMechanism(Pv)
        }
        await hv;
        const {
          root: Sv,
          tree: ev
        } = this;
        Sv && (Sv.uF(!0), ev.meshes.push(Sv), ev.rootNodes.push(Sv));
        for (const pv of this.asset.model.nodes) {
          const vv = this.nodeObjects.get(pv.index);
          vv && ["TransformNode", "LiteNode"].includes(vv.getClassName()) && ev.transformNodes.push(vv);
          for (const zv of null !== (gv = this.nodePrimitives.get(pv.index)) && void 0 !== gv ? gv : []) {
            var gv;
            ev.meshes.push(zv);
            const vv = zv.geometry;
            vv && !ev.geometries.includes(vv) && ev.geometries.push(vv)
          }
        }
      }
      createRoot() {
        const vv = this.node("__root__", !0);
        this.root = vv, vv.uF(!1), this.Is.useRightHandedSystem || az(Lv, vv)
      }
      loadScene() {
        const vv = [];
        for (const zv of this.asset.model.rootNodes) vv.push(this.loadNode(this.asset.model.nodes[zv], (vv => {
          vv.parent = this.root
        })));
        return vv.push(Promise.resolve()), Promise.all(vv).then((() => {}))
      }
      loadNode(vv, zv) {
        const Pv = `/nodes/${vv.index}`,
          hv = [],
          Sv = Sv => {
            if (Wz(Sv, Pv), az(vv, Sv), vv.hasCamera && !this.Is.useRightHandedSystem) {
              const {
                pp: vv
              } = Sv;
              vv.set(-1, vv.y, vv.z)
            }
            for (const zv of vv.children) hv.push(this.loadNode(this.asset.model.nodes[zv], (vv => {
              vv.parent = Sv
            })));
            (Pv => {
              wz(Pv, vv.extras), zv(Pv)
            })(Sv)
          };
        if (null === vv.mesh) {
          const zv = this.node(Av(vv), !1);
          this.nodeObjects.set(vv.index, zv), Sv(zv)
        } else {
          const zv = this.asset.model.meshes[vv.mesh];
          hv.push(this.loadMesh(`/meshes/${zv.index}`, vv, zv, Sv))
        }
        return Promise.all(hv).then((() => {
          for (const Pv of null !== (zv = this.nodePrimitives.get(vv.index)) && void 0 !== zv ? zv : []) {
            var zv;
            Pz(Pv)
          }
          return this.nodeObjects.get(vv.index)
        }))
      }
      loadMesh(vv, zv, Pv, hv) {
        const Sv = [],
          ev = Av(zv);
        if (1 === Pv.primitives.length) {
          const hv = Pv.primitives[0];
          Sv.push(this.loadPrimitive(`${vv}/primitives/${hv.index}`, ev, hv, (vv => {
            this.nodeObjects.set(zv.index, vv), this.nodePrimitives.set(zv.index, [vv])
          })))
        } else {
          const hv = this.node(ev, !1);
          this.nodeObjects.set(zv.index, hv);
          const gv = [];
          this.nodePrimitives.set(zv.index, gv);
          for (const zv of Pv.primitives) Sv.push(this.loadPrimitive(`${vv}/primitives/${zv.index}`, `${ev}_primitive${zv.index}`, zv, (vv => {
            vv.parent = hv, gv.push(vv)
          })))
        }
        const gv = this.nodeObjects.get(zv.index);
        return hv(gv), Promise.all(Sv).then((() => gv))
      }
      loadPrimitive(vv, zv, Pv, hv) {
        const Sv = [],
          ev = this.node(zv, !0);
        if (ev.sideOrientation = this.Is.useRightHandedSystem ? dz.c.CounterClockWiseSideOrientation : dz.c.ClockWiseSideOrientation, Sv.push(this.geometryData.load(vv, Pv, ev).then((vv => {
            if ((0, uv.f)(ev)) {
              var zv, Pv;
              const hv = vv;
              ev.replaceModel(hv, Int32Array.of(0, null !== (zv = null === (Pv = hv.indexData) || void 0 === Pv ? void 0 : Pv.length) && void 0 !== zv ? zv : hv.vertexCount, 0, hv.vertexCount))
            } else this.create((() => (vv.applyToMesh(ev), vv)))
          }))), this.materials) {
          const vv = 0 === Pv.mode ? dz.c.PointListDrawMode : dz.c.TriangleFillMode,
            zv = null === Pv.material ? null : this.asset.model.materials[Pv.material];
          Sv.push(this.loadMaterial(zv, vv, (vv => {
            ev.material = vv
          })))
        }
        return Wz(ev, vv), hv(ev), Promise.all(Sv).then((() => ev))
      }
      loadMaterial(vv, zv, Pv) {
        var hv;
        const Sv = `${null!==(hv=null===vv||void 0===vv?void 0:vv.index)&&void 0!==hv?hv:"default"}:${zv}`;
        let ev = this.materialData.get(Sv);
        return ev || (ev = this.createMaterial(vv, zv), this.materialData.set(Sv, ev)), Pv(ev.material), ev.promise
      }
      createMaterial(vv, zv) {
        const Pv = vv ? vv.name || `material${vv.index}` : "__GLTFLoader._default",
          {
            style: hv,
            unlit: Sv
          } = this.materials;
        let ev;
        const gv = this.create((() => {
          const gv = (0, Tz.c)({
            name: Pv,
            Is: this.Is,
            sets: {
              ...(0, vz.c)(this.asset, vv, hv, Sv),
              fillMode: zv
            },
            unrendered: !0
          });
          return ev = gv.model, gv.mirror
        }));
        let pv = Promise.resolve();
        if (vv) {
          const zv = `/materials/${vv.index}`,
            hv = ev.diffuseTexture;
          if (hv && !hv.mirror) pv = new Promise((vv => setTimeout(vv)));
          else if (hv) {
            const Sv = hv.mirror;
            Sv._parentContainer = this.container, Sv.name = `${Pv} (Base Color)`, Wz(Sv, `${zv}${vv.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Sv), pv = (0, Nz.r)(hv)
          }
          wz(gv, vv.extras), Wz(gv, zv)
        }
        return this.tree.materials.push(gv), {
          material: gv,
          promise: pv
        }
      }
    }

    function iz() {
      ez.e.dracoDecodes = sv.decodes, ez.e.dracoWorkersStarted = sv.workersStarted, ez.e.dracoMostWorkers = sv.mostWorkers
    }
    async function cz(vv, zv, Pv, Sv, ev) {
      try {
        return await async function(vv, zv, Pv, Sv, ev, gv) {
          var pv;
          let dv;
          const Nv = null === (pv = (0, lz.g)()) || void 0 === pv ? void 0 : pv.Ma,
            lv = null !== Nv && void 0 !== Nv && Nv.ya && zv === Nv.rD() ? Nv : null,
            Tv = ev && !lv;
          return await kv(vv, zv, Pv, Sv, hv.b, (vv => (dv = new sz(zv, Tv), new Cz(vv, zv, dv, Tv, new hz(zv, Sv), gv, lv).load())), !ev), dv
        }(vv, zv, Pv, jv, Sv, ev)
      } finally {
        iz()
      }
    }
    async function Gz(vv, zv, Pv, Sv) {
      try {
        return await kv(vv, zv, Pv, jv, hv.b, (vv => Sv(vv, new hz(zv, jv))))
      } finally {
        iz()
      }
    }
    Sz = Sv.e, lv || (lv = {
      scriptUrl: new URL(Sz.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Sz.wasmBinaryUrl, location.href).href
    })
  },
  40789: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv
    });
    var hv = Pv(108),
      Sv = Pv(1192);

    function ev(vv) {
      return (0, hv.b)() ? `https://${Sv.b.discordDomain}/${vv.href}` : vv.href
    }
    const gv = {
      scriptUrl: ev(new Pv.U(Pv(40794))),
      wasmBinaryUrl: ev(new Pv.U(Pv(40803)))
    }
  },
  35833: vv => {
    vv.exports = function(vv, zv, Pv, hv) {
      var Sv = self || window;
      try {
        try {
          var ev;
          try {
            ev = new Sv.Blob([vv])
          } catch (Nv) {
            (ev = new(Sv.BlobBuilder || Sv.WebKitBlobBuilder || Sv.MozBlobBuilder || Sv.MSBlobBuilder)).append(vv), ev = ev.getBlob()
          }
          var gv = Sv.URL || Sv.webkitURL,
            pv = gv.createObjectURL(ev),
            dv = new Sv[zv](pv, Pv);
          return gv.revokeObjectURL(pv), dv
        } catch (Nv) {
          return new Sv[zv]("data:application/javascript,".concat(encodeURIComponent(vv)), Pv)
        }
      } catch (Nv) {
        if (!hv) throw Error("Inline worker is not supported");
        return new Sv[zv](hv, Pv)
      }
    }
  },
  40803: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  40794: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);
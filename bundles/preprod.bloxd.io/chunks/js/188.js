export const id = 188;
export const ids = [188];
export const modules = {
  39929: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      loadGlbAsset: () => lb,
      loadGlbTree: () => Eb
    });
    var Uy = Wy(36559),
      hy = Wy(39937),
      fy = Wy(35092),
      Zy = Wy.n(fy);

    function cb() {
      return Zy()('(()=>{class yb extends Error{}function bb(bb,Wy){const Uy=bb._malloc(Wy);if(0===Uy)throw new yb(`Draco: the decoder\'s heap refused ${Wy} bytes`);return Uy}function Wy(yb){return{[yb.DT_FLOAT32]:[Float32Array,5126],[yb.DT_INT8]:[Int8Array,5120],[yb.DT_INT16]:[Int16Array,5122],[yb.DT_INT32]:[Int32Array,5124],[yb.DT_UINT8]:[Uint8Array,5121],[yb.DT_UINT16]:[Uint16Array,5123],[yb.DT_UINT32]:[Uint32Array,5125]}}function Uy(bb,Uy,hy,fy,Zy){let cb=null,Py=null,oy=null;try{cb=new bb.Decoder,Py=new bb.DecoderBuffer,Py.Init(Uy,Uy.byteLength);let By=0;const Ky=cb.GetEncodedGeometryType(Py);if(Ky===bb.TRIANGULAR_MESH){const Wy=new bb.Mesh;oy=Wy;const Uy=cb.DecodeBufferToMesh(Py,Wy);if(!Uy.ok()||0===Wy.ptr)throw new yb(Uy.error_msg());By=3*Wy.num_faces()}else{if(Ky!==bb.POINT_CLOUD)throw new yb(`Draco: Cannot decode invalid geometry type ${Ky}`);{const Wy=new bb.PointCloud;oy=Wy;const Uy=cb.DecodeBufferToPointCloud(Py,Wy);if(!Uy.ok()||!Wy.ptr)throw new yb(Uy.error_msg())}}const ey=oy.num_points();if(ey!==fy.vertices||By!==fy.indices)throw new yb(`Draco: decoded ${ey} vertices and ${By} indices, the accessors declare ${fy.vertices} and ${fy.indices}`);const qb=Wy(bb),sy=[];for(const{kind:bb,id:Wy,components:Uy}of hy){const hy=cb.GetAttributeByUniqueId(oy,Wy);if(!hy||0===hy.ptr)throw new yb(`Draco: no attribute with id ${Wy} (${bb})`);const fy=hy.data_type();if(!qb[fy])throw new yb(`Draco: Cannot decode invalid data type ${fy}`);if(hy.num_components()!==Uy)throw new yb(`Draco: ${bb} decodes to ${hy.num_components()} components, its accessor declares ${Uy}`);sy.push([bb,hy,fy])}return Zy({dracoDecoder:cb,geometry:oy,triangles:Ky===bb.TRIANGULAR_MESH,numPoints:ey,numIndices:By,attributes:sy})}finally{oy&&bb.destroy(oy),Py&&bb.destroy(Py),cb&&bb.destroy(cb)}}const hy=self;let fy=null;self.onmessage=yb=>{let{data:Zy}=yb;if("init"===Zy.id){try{importScripts(Zy.url),fy=DracoDecoderModule({wasmBinary:Zy.wasmBinary}),hy.postMessage({id:"initDone"})}catch(Ky){hy.postMessage({id:"initError",message:Ky instanceof Error?Ky.message:String(Ky)})}return}const{seq:cb,data:Py,attributeIds:oy,expected:By}=Zy;fy?fy.then((yb=>{try{const fy=function(yb,hy,fy,Zy){const cb=Object.keys(fy).map((yb=>({kind:yb,id:fy[yb],components:Zy.components[yb]})));return Uy(yb,hy,cb,Zy,(Uy=>{let{dracoDecoder:hy,geometry:fy,triangles:Zy,numPoints:cb,numIndices:Py,attributes:oy}=Uy;const By=Wy(yb);let Ky=null;if(Zy){const Wy=4*Py,Uy=bb(yb,Wy);try{hy.GetTrianglesUInt32Array(fy,Wy,Uy),Ky=new Uint32Array(Py),Ky.set(new Uint32Array(yb.HEAPF32.buffer,Uy,Py))}finally{yb._free(Uy)}}const ey=[];for(const[Wy,qb,sy]of oy){const[Uy]=By[sy],Zy=qb.num_components(),Py=cb*Zy,oy=Py*Uy.BYTES_PER_ELEMENT,Ky=bb(yb,oy);try{hy.GetAttributeDataArrayForAllPoints(fy,qb,sy,oy,Ky),ey.push({kind:Wy,data:new Uy(yb.HEAPF32.buffer,Ky,Py).slice(),size:Zy,byteOffset:qb.byte_offset(),byteStride:qb.byte_stride(),normalized:qb.normalized()})}finally{yb._free(Ky)}}return{indices:Ky,attributes:ey,totalVertices:cb}}))}(yb,Py,oy,By),Zy=fy.attributes.map((yb=>yb.data.buffer));fy.indices&&Zy.push(fy.indices.buffer),hy.postMessage({id:"decoded",seq:cb,...fy},Zy)}catch(Ky){hy.postMessage({id:"decodeError",seq:cb,message:Ky instanceof Error?Ky.message:String(Ky)})}}),(yb=>{hy.postMessage({id:"decodeError",seq:cb,message:yb instanceof Error?yb.message:String(yb)})})):hy.postMessage({id:"decodeError",seq:cb,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, Wy.p + "dracoDecode.worker.69234734.worker.js")
    }
    const Py = 1e3;
    let oy = null,
      By = null;
    const Ky = [],
      ey = [];
    let qb = 0;
    const sy = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };

    function Sy() {
      if (!oy) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: yb,
        wasmBinaryUrl: bb
      } = oy;
      return By ??= fetch(bb).then((yb => {
        if (!yb.ok) throw new Error(`Draco: fetching ${bb} failed: ${yb.status}`);
        return yb.arrayBuffer()
      })), By.catch((() => {
        By = null
      })), sy.workersStarted++, By.then((bb => new Promise(((Wy, Uy) => {
        const hy = new cb;
        hy.onerror = yb => {
          hy.onmessage = null, hy.onerror = null, hy.terminate(), Uy(new Error("Draco: the decode worker failed to start" + (yb.message ? `: ${yb.message}` : " (its script did not load)")))
        }, hy.onmessage = yb => {
          let {
            data: bb
          } = yb;
          hy.onmessage = null, hy.onerror = null, "initDone" === bb.id ? Wy(hy) : (hy.terminate(), Uy(new Error(`Draco: ${"initError"===bb.id?bb.message:"the worker did not start"}`)))
        };
        const fy = bb.slice(0),
          Zy = {
            id: "init",
            url: yb,
            wasmBinary: fy
          };
        hy.postMessage(Zy, [fy])
      }))))
    }

    function Ey(yb) {
      const bb = Ky.indexOf(yb); - 1 !== bb && Ky.splice(bb, 1);
      const Wy = ey.shift();
      Wy && mb(Wy)
    }

    function ly(yb, bb) {
      yb.busy = !0, yb.releaseTimer && (clearTimeout(yb.releaseTimer), yb.releaseTimer = null);
      yb.worker.then((Wy => {
        const Uy = qb++;
        Wy.onmessage = hy => {
          let {
            data: fy
          } = hy;
          if (("decoded" === fy.id || "decodeError" === fy.id) && fy.seq === Uy) {
            if (Wy.onmessage = null, Wy.onerror = null, "decoded" === fy.id) return sy.decodes++, bb.resolve({
              indices: fy.indices,
              attributes: fy.attributes,
              totalVertices: fy.totalVertices
            }), void(() => {
              const bb = ey.shift();
              bb ? ly(yb, bb) : (yb.busy = !1, yb.releaseTimer = setTimeout((() => {
                const bb = Ky.indexOf(yb); - 1 !== bb && Ky.splice(bb, 1), yb.worker.then((yb => {
                  yb.terminate()
                }))
              }), Py))
            })();
            Wy.terminate(), bb.reject(new Error(fy.message)), Ey(yb)
          }
        }, Wy.onerror = Uy => {
          Wy.onmessage = null, Wy.onerror = null, Wy.terminate(), bb.reject(new Error(`Draco: the decode worker failed: ${Uy.message}`)), Ey(yb)
        };
        const hy = {
          id: "decode",
          seq: Uy,
          data: bb.data,
          attributeIds: bb.attributeIds,
          expected: bb.expected
        };
        Wy.postMessage(hy, [bb.data.buffer])
      }), (Wy => {
        bb.reject(Wy instanceof Error ? Wy : new Error(String(Wy))), Ey(yb)
      }))
    }

    function mb(yb) {
      const bb = Ky.find((yb => !yb.busy));
      if (bb) ly(bb, yb);
      else {
        if (Ky.length < function() {
            const yb = "object" === typeof navigator ? navigator.hardwareConcurrency : 0;
            return yb ? Math.max(1, Math.min(Math.floor(.5 * yb), 4)) : 1
          }()) {
          const bb = {
            worker: Sy(),
            busy: !0,
            releaseTimer: null
          };
          return Ky.push(bb), sy.mostWorkers = Math.max(sy.mostWorkers, Ky.length), void ly(bb, yb)
        }
        ey.push(yb)
      }
    }

    function Cy(yb, bb, Wy) {
      return new Promise(((Uy, hy) => {
        mb({
          data: new Int8Array(yb.buffer, yb.byteOffset, yb.byteLength).slice(),
          attributeIds: bb,
          expected: Wy,
          resolve: Uy,
          reject: hy
        })
      }))
    }
    var Ty = Wy(36047),
      Vy = Wy(36060),
      Jy = Wy(33198),
      gb = Wy(33194);
    const Gy = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function Oy(yb) {
      const bb = (0, gb.k)(yb.byteLength);
      if (bb) throw new Jy.l(bb);
      const {
        json: Wy,
        bin: Uy
      } = (0, Jy.A)(yb), hy = (0, gb.g)(Wy, Uy);
      if (hy) throw new Jy.l(hy);
      try {
        return function(yb, bb) {
          var Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey;
          const ly = new Map,
            mb = Wy => {
              let Uy = ly.get(Wy);
              if (!Uy) {
                var hy;
                const fy = yb.bufferViews[Wy],
                  Zy = null !== (hy = fy.byteOffset) && void 0 !== hy ? hy : 0;
                Uy = {
                  index: Wy,
                  bytes: bb.subarray(Zy, Zy + fy.byteLength),
                  byteStride: fy.byteStride
                }, ly.set(Wy, Uy)
              }
              return Uy
            },
            Cy = new Map,
            Ty = bb => {
              let Wy = Cy.get(bb);
              if (!Wy) {
                var Uy;
                const hy = yb.accessors[bb];
                Wy = {
                  index: bb,
                  count: hy.count,
                  type: hy.type,
                  numComponents: Jy.p[hy.type],
                  componentType: hy.componentType,
                  normalized: null !== (Uy = hy.normalized) && void 0 !== Uy && Uy,
                  byteOffset: hy.byteOffset,
                  bufferView: void 0 === hy.bufferView ? null : mb(hy.bufferView),
                  min: hy.min,
                  max: hy.max
                }, Cy.set(bb, Wy)
              }
              return Wy
            },
            Vy = null !== (Wy = null === (Uy = yb.extensionsUsed) || void 0 === Uy ? void 0 : Uy.includes("KHR_draco_mesh_compression")) && void 0 !== Wy && Wy,
            gb = (null !== (hy = yb.meshes) && void 0 !== hy ? hy : []).map(((bb, Wy) => {
              const Uy = bb.primitives.map(((bb, Wy) => {
                var Uy, hy, fy;
                const Zy = Vy ? null === (Uy = bb.extensions) || void 0 === Uy ? void 0 : Uy.KHR_draco_mesh_compression : void 0;
                let cb = null;
                const Py = [];
                if (Zy) {
                  const Wy = {
                    vertices: yb.accessors[bb.attributes.POSITION].count,
                    indices: void 0 === bb.indices ? 0 : yb.accessors[bb.indices].count,
                    components: {}
                  };
                  cb = {
                    bufferView: mb(Zy.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: Wy
                  };
                  for (const [Uy, hy] of Jy.g) {
                    const fy = Zy.attributes[Uy];
                    if (void 0 === fy) continue;
                    cb.attributeIds[hy] = fy;
                    const Py = bb.attributes[Uy];
                    var oy;
                    if (void 0 !== Py) cb.normalized[hy] = null !== (oy = yb.accessors[Py].normalized) && void 0 !== oy && oy, Wy.components[hy] = Jy.p[yb.accessors[Py].type]
                  }
                } else
                  for (const [yb, By] of Jy.g) {
                    const Wy = bb.attributes[yb];
                    void 0 !== Wy && Py.push({
                      semantic: yb,
                      kind: By,
                      accessor: Ty(Wy)
                    })
                  }
                return {
                  index: Wy,
                  mode: null !== (hy = bb.mode) && void 0 !== hy ? hy : 4,
                  attributes: Py,
                  indices: Zy || void 0 === bb.indices ? null : Ty(bb.indices),
                  position: void 0 === bb.attributes.POSITION ? null : Ty(bb.attributes.POSITION),
                  material: null !== (fy = bb.material) && void 0 !== fy ? fy : null,
                  draco: cb
                }
              }));
              return {
                index: Wy,
                name: bb.name,
                primitives: Uy,
                extras: bb.extras
              }
            })),
            Oy = (null !== (fy = yb.nodes) && void 0 !== fy ? fy : []).map(((yb, bb) => {
              var Wy, Uy;
              return {
                index: bb,
                name: yb.name,
                children: null !== (Wy = yb.children) && void 0 !== Wy ? Wy : [],
                mesh: null !== (Uy = yb.mesh) && void 0 !== Uy ? Uy : null,
                translation: yb.translation,
                rotation: yb.rotation,
                scale: yb.scale,
                hasCamera: void 0 !== yb.camera,
                extras: yb.extras
              }
            })),
            Ry = null !== (Zy = null === (cb = yb.extensionsUsed) || void 0 === cb ? void 0 : cb.includes("KHR_materials_unlit")) && void 0 !== Zy && Zy,
            vb = null !== (Py = null === (oy = yb.extensionsUsed) || void 0 === oy ? void 0 : oy.includes("KHR_texture_transform")) && void 0 !== Py && Py,
            ib = (null !== (By = yb.materials) && void 0 !== By ? By : []).map(((yb, bb) => {
              var Wy, Uy, hy, fy;
              const Zy = yb.pbrMetallicRoughness,
                cb = null === Zy || void 0 === Zy ? void 0 : Zy.baseColorTexture;
              return {
                index: bb,
                name: yb.name,
                extras: yb.extras,
                unlit: Ry && void 0 !== (null === (Wy = yb.extensions) || void 0 === Wy ? void 0 : Wy.KHR_materials_unlit),
                pbr: Zy ? {
                  baseColorFactor: Zy.baseColorFactor,
                  metallicFactor: Zy.metallicFactor,
                  roughnessFactor: Zy.roughnessFactor
                } : null,
                baseColorTexture: cb ? {
                  texture: cb.index,
                  transform: vb && (null === (Uy = cb.extensions) || void 0 === Uy ? void 0 : Uy.KHR_texture_transform) || null
                } : null,
                emissiveFactor: yb.emissiveFactor,
                alphaMode: null !== (hy = yb.alphaMode) && void 0 !== hy ? hy : "OPAQUE",
                alphaCutoff: yb.alphaCutoff,
                doubleSided: null !== (fy = yb.doubleSided) && void 0 !== fy && fy
              }
            })),
            My = (null !== (Ky = yb.textures) && void 0 !== Ky ? Ky : []).map(((bb, Wy) => {
              var Uy, hy;
              const fy = void 0 === bb.sampler ? Gy : {
                index: bb.sampler,
                ...null === (Uy = yb.samplers) || void 0 === Uy ? void 0 : Uy[bb.sampler]
              };
              return {
                index: Wy,
                sampler: {
                  index: fy.index,
                  magFilter: fy.magFilter,
                  minFilter: fy.minFilter,
                  wrapS: fy.wrapS,
                  wrapT: fy.wrapT
                },
                image: null !== (hy = bb.source) && void 0 !== hy ? hy : -1
              }
            })),
            Yy = (null !== (ey = yb.images) && void 0 !== ey ? ey : []).map(((yb, bb) => ({
              index: bb,
              name: yb.name,
              mimeType: yb.mimeType,
              bufferView: mb(yb.bufferView)
            }))),
            Xy = null !== (qb = (0, Jy.y)(yb)) && void 0 !== qb ? qb : 0;
          return {
            json: yb,
            rootNodes: null !== (sy = null === (Sy = yb.scenes) || void 0 === Sy || null === (Ey = Sy[Xy]) || void 0 === Ey ? void 0 : Ey.nodes) && void 0 !== sy ? sy : [],
            nodes: Oy,
            meshes: gb,
            materials: ib,
            textures: My,
            images: Yy
          }
        }(Wy, Uy)
      } catch (fy) {
        throw fy instanceof Jy.i ? fy : new Jy.i(`reading the GLB failed: ${fy instanceof Error?fy.message:String(fy)}`)
      }
    }
    async function Ry(yb, bb) {
      var Wy, Uy;
      const hy = yb.draco;
      if (!hy) throw new Jy.i("not a Draco primitive");
      let fy;
      try {
        fy = await bb(hy.bufferView.bytes, hy.attributeIds, hy.expected)
      } catch (oy) {
        throw new Jy.i(`Draco decoding failed: ${oy instanceof Error?oy.message:String(oy)}`)
      }
      const {
        vertices: Zy,
        indices: cb,
        components: Py
      } = hy.expected;
      if (fy.totalVertices !== Zy || (null !== (Wy = null === (Uy = fy.indices) || void 0 === Uy ? void 0 : Uy.length) && void 0 !== Wy ? Wy : 0) !== cb || fy.attributes.some((yb => yb.size !== Py[yb.kind] || yb.data.length !== Zy * yb.size))) throw new Jy.i("Draco decoding gave other counts than the accessors declare");
      for (const By of fy.attributes) {
        const yb = hy.normalized[By.kind];
        void 0 !== yb && (By.normalized = yb)
      }
      return fy
    }
    const vb = new WeakMap;

    function ib(yb, bb) {
      var Wy;
      const Uy = null !== (Wy = vb.get(yb)) && void 0 !== Wy ? Wy : bb(yb);
      return vb.set(yb, Uy), Uy
    }

    function My(yb) {
      const bb = yb.bufferView,
        Wy = 5125 === yb.componentType ? Uint32Array : Uint16Array,
        Uy = bb.bytes.buffer,
        hy = bb.bytes.byteOffset + (yb.byteOffset || 0);
      return hy % Wy.BYTES_PER_ELEMENT !== 0 ? new Wy(Uy.slice(hy, hy + yb.count * Wy.BYTES_PER_ELEMENT), 0) : new Wy(Uy, hy, yb.count)
    }

    function Yy(yb, bb) {
      if (yb.min && yb.max) return [new Float64Array(yb.min), new Float64Array(yb.max)];
      const Wy = bb.find((yb => {
          let {
            kind: bb
          } = yb;
          return "position" === bb
        })),
        Uy = Wy ? (0, Vy.h)(Wy, yb.count) : new Float32Array(0);
      return (0, Vy.t)(Uy.length / 3, ((yb, bb) => Uy[3 * yb + bb]))
    }

    function Xy(yb) {
      const bb = yb.attributes.map((yb => {
          var bb, Wy;
          let {
            kind: Uy,
            accessor: hy
          } = yb;
          const {
            bufferView: fy,
            numComponents: Zy
          } = hy;
          if (!fy) {
            return {
              kind: Uy,
              data: ib(hy, (() => new Float32Array(Zy * hy.count))),
              offset: 0,
              stride: 4 * Zy,
              components: Zy,
              glType: 5126,
              isNormalized: !1
            }
          }
          const cb = null !== (bb = fy.byteStride) && void 0 !== bb ? bb : Zy * Jy.c[hy.componentType];
          return {
            kind: Uy,
            data: fy.bytes,
            offset: null !== (Wy = hy.byteOffset) && void 0 !== Wy ? Wy : 0,
            stride: cb,
            components: Zy,
            glType: hy.componentType,
            isNormalized: hy.normalized
          }
        })),
        Wy = yb.indices,
        Uy = Wy && ib(Wy, My),
        hy = yb.position;
      return new Vy.f(bb, Uy, hy.count, ...Yy(hy, bb))
    }
    const ny = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function uy(yb, bb) {
      const Wy = bb.attributes.map((yb => {
        let {
          kind: bb,
          data: Wy,
          size: Uy,
          byteOffset: hy,
          byteStride: fy,
          normalized: Zy
        } = yb;
        return {
          kind: bb,
          data: Wy,
          offset: hy,
          stride: fy,
          components: Uy,
          glType: 5120 + ny.indexOf(Wy.constructor),
          isNormalized: Zy
        }
      }));
      return new Vy.f(Wy, bb.indices, bb.totalVertices, ...Yy(yb.position, Wy))
    }

    function rb(yb) {
      const bb = yb.lastIndexOf("/");
      return bb < 0 ? yb : yb.substring(bb + 1)
    }

    function Hy(yb) {
      const bb = yb.lastIndexOf("/");
      return bb < 0 ? "" : yb.substring(0, bb + 1)
    }

    function ab(yb) {
      return yb.name || `node${yb.index}`
    }
    const Fy = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      py = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      Ly = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function Qy(yb) {
      var bb, Wy, Uy, hy;
      const fy = null !== (bb = yb.minFilter) && void 0 !== bb ? bb : 9987;
      return 9729 === (null !== (Wy = yb.magFilter) && void 0 !== Wy ? Wy : 9729) ? null !== (Uy = py[fy]) && void 0 !== Uy ? Uy : 3 : null !== (hy = Ly[fy]) && void 0 !== hy ? hy : 4
    }
    const jb = {
      33071: 0,
      33648: 2
    };

    function Dy(yb) {
      var bb;
      return null !== (bb = jb[null !== yb && void 0 !== yb ? yb : 10497]) && void 0 !== bb ? bb : 1
    }

    function tb(yb) {
      return 9728 === yb.minFilter || 9729 === yb.minFilter
    }

    function wy(yb) {
      var bb, Wy, Uy;
      const hy = Float64Array.from(null !== (bb = yb.scale) && void 0 !== bb ? bb : [1, 1, 1]);
      return yb.hasCamera && (hy[0] = -1), {
        translation: Float64Array.from(null !== (Wy = yb.translation) && void 0 !== Wy ? Wy : [0, 0, 0]),
        rotation: Float64Array.from(null !== (Uy = yb.rotation) && void 0 !== Uy ? Uy : [0, 0, 0, 1]),
        scale: hy
      }
    }

    function kb(yb, bb) {
      let {
        translation: Wy,
        rotation: Uy,
        scale: hy
      } = yb;
      const fy = new Float32Array(16);
      return (0, Ty.e)(hy, 0, Uy, 0, Wy, 0, fy), bb && (0, Ty.o)(fy, bb, 0, fy), fy
    }
    class Ny {
      constructor(yb, bb, Wy, Uy) {
        this.model = yb, this.decode = bb, this.fileInfo = Wy, this.uniqueRootUrl = Uy, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const hy = new Set,
          fy = (bb, Wy) => {
            const Uy = yb.nodes[bb];
            if (this.parents.has(Uy)) throw new Jy.i(`/nodes/${bb}: Invalid recursive node hierarchy`);
            this.parents.set(Uy, Wy);
            const Zy = null === Uy.mesh ? [] : yb.meshes[Uy.mesh].primitives,
              cb = Zy.map((yb => {
                const bb = Zy.length > 1;
                return {
                  name: bb ? `${ab(Uy)}_primitive${yb.index}` : ab(Uy),
                  node: Uy,
                  primitive: yb,
                  part: bb,
                  geometry: null
                }
              }));
            this.uses.set(Uy, cb);
            const Py = null !== Uy.mesh && hy.has(Uy.mesh);
            hy.add(Uy.mesh), this.own.set(Uy, Py ? [] : cb);
            for (const yb of Uy.children) fy(yb, Uy)
          };
        for (const Zy of yb.rootNodes) fy(Zy, null);
        this.primitives = yb.nodes.flatMap((yb => {
          var bb;
          return null !== (bb = this.own.get(yb)) && void 0 !== bb ? bb : []
        }))
      }
      decodeGeometries() {
        const yb = new Map;
        return Promise.all(this.primitives.map((async bb => {
          const {
            primitive: Wy
          } = bb, Uy = Wy.draco;
          let hy = Uy ? yb.get(Uy.bufferView.index) : Promise.resolve(Xy(Wy));
          hy || (hy = Ry(Wy, this.decode).then((yb => uy(Wy, yb))), yb.set(Uy.bufferView.index, hy)), bb.geometry = await hy
        })))
      }
      parentOf(yb) {
        var bb;
        return null !== (bb = this.parents.get(yb)) && void 0 !== bb ? bb : null
      }
      meshesUnder(yb) {
        const bb = this.model.nodes.filter((yb => this.uses.has(yb)));
        for (const Uy of bb) {
          const bb = this.uses.get(Uy),
            Wy = bb.find((bb => bb.name === yb));
          if (Wy) return 1 === bb.length ? this.subtree(Uy) : this.own.get(Uy).includes(Wy) ? [Wy] : []
        }
        const Wy = bb.find((bb => 1 !== this.uses.get(bb).length && ab(bb) === yb));
        return Wy ? this.subtree(Wy) : null
      }
      subtree(yb) {
        return [...this.own.get(yb), ...yb.children.flatMap((yb => this.subtree(this.model.nodes[yb])))]
      }
      worldMatrix(yb, bb, Wy) {
        let Uy = kb(wy(bb ? Fy : {}), null);
        const hy = [];
        for (let Zy = yb.part ? yb.node : this.parentOf(yb.node); Zy; Zy = this.parentOf(Zy)) hy.unshift(Zy);
        for (const Zy of hy) Uy = kb(wy(Zy), Uy);
        const fy = wy(yb.part ? {} : yb.node);
        return void 0 !== Wy && fy.scale.fill(Wy), kb(fy, Uy)
      }
      floats(yb) {
        const {
          vertexAttributes: bb,
          vertexCount: Wy
        } = yb.geometry;
        return new Map(bb.map((yb => [yb.kind, (0, Vy.h)(yb, Wy)])))
      }
      imageUrl(yb) {
        return function(yb, bb, Wy) {
          let {
            name: Uy
          } = bb;
          return `data:${yb}${Uy}#image${Wy}`
        }(this.uniqueRootUrl, this.fileInfo, yb)
      }
      textureDesc(yb, bb) {
        var Wy;
        let {
          texture: Uy,
          transform: hy
        } = yb;
        const {
          sampler: fy,
          image: Zy
        } = this.model.textures[Uy], {
          bufferView: cb,
          mimeType: Py,
          name: oy
        } = this.model.images[Zy], By = hy && {
          ...hy.offset ? {
            uOffset: hy.offset[0],
            vOffset: hy.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...hy.rotation ? {
            wAng: -hy.rotation
          } : {},
          ...hy.scale ? {
            uScale: hy.scale[0],
            vScale: hy.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(Zy),
          noMipmap: tb(fy),
          invertY: !1,
          samplingMode: Qy(fy),
          data: {
            bytes: cb.bytes,
            mimeType: Py,
            label: oy,
            context: `/textures/${Uy}`
          },
          sets: {
            wrapU: Dy(fy.wrapS),
            wrapV: Dy(fy.wrapT),
            ...By,
            coordinatesIndex: null !== (Wy = null === hy || void 0 === hy ? void 0 : hy.texCoord) && void 0 !== Wy ? Wy : 0,
            hasAlpha: bb
          }
        }
      }
    }
    async function zb(yb, bb, Wy, Uy, hy, fy) {
      let Zy = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const cb = function(yb, bb, Wy) {
          return "string" !== typeof bb ? {
            url: "",
            rootUrl: yb,
            name: Wy()
          } : bb ? bb.startsWith("data:") ? {
            url: bb,
            rootUrl: yb,
            name: ""
          } : yb ? {
            url: yb + bb,
            rootUrl: yb,
            name: bb
          } : {
            url: bb,
            rootUrl: Hy(bb),
            name: rb(bb)
          } : {
            url: yb,
            rootUrl: Hy(yb),
            name: rb(yb)
          }
        }(Wy, yb, hy),
        Py = {};
      bb.addPendingData(Py);
      try {
        const Wy = Oy(await async function(yb, bb) {
            return "string" !== typeof bb ? bb : yb.url.startsWith("data:") ? (0, Jy.t)(yb.url) : await (0, Jy.u)(yb.url)
          }(cb, yb)),
          Py = new Ny(Wy, Uy, cb, function(yb, bb) {
            let {
              rootUrl: Wy,
              name: Uy
            } = yb;
            return !Wy.startsWith("file:") && Uy ? Wy : `${Wy}${bb()}/`
          }(cb, hy));
        return await fy(Py), bb.importedMeshesFiles && (bb.loadingPluginName = "jBy", Zy && bb.importedMeshesFiles.push(cb.url)), Py
      } finally {
        bb.removePendingData(Py)
      }
    }
    var Iy = Wy(36185),
      xb = Wy(36026),
      Ay = Wy(36552);

    function dy(yb) {
      if (null === yb || void 0 === yb || !yb.min || !yb.max) return null;
      const [bb, Wy, Uy] = yb.min, [hy, fy, Zy] = yb.max, {
        BoundingInfo: cb,
        dU: Py
      } = (0, Iy.b)();
      return new cb(new Py(bb, Wy, Uy), new Py(hy, fy, Zy))
    }

    function yW(yb) {
      (0, xb.i)(yb) || (yb.geometry && yb.geometry.useBoundingInfoFromGeometry ? yb._updateBoundingInfo() : yb.refreshBoundingInfo(!0, !0))
    }
    class bW {
      constructor(yb, bb) {
        this.Pf = yb, this.decode = bb, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(yb) {
        let bb = this.viewData.get(yb.index);
        return bb || (bb = this.bufferData.then((() => yb.bytes)), this.viewData.set(yb.index, bb)), bb
      }
      viewBuffer(yb) {
        let bb = this.viewBuffers.get(yb.index);
        return bb || (bb = this.viewBytes(yb).then((yb => new((0, Iy.b)().uU)(this.Pf.xh(), yb, !1))), this.viewBuffers.set(yb.index, bb)), bb
      }
      vertexBuffer(yb, bb) {
        const {
          kind: Wy,
          data: Uy
        } = bb, hy = `${yb.index}:${Wy}`;
        let fy = this.vertexBuffers.get(hy);
        if (!fy) {
          const Zy = yb.bufferView;
          fy = Zy ? this.viewBuffer(Zy).then((yb => this.layoutVertexBuffer(yb, bb))) : Promise.resolve(Uy).then((yb => new((0, Iy.b)().VertexBuffer)(this.Pf.xh(), yb, Wy, !1))), this.vertexBuffers.set(hy, fy)
        }
        return fy
      }
      layoutVertexBuffer(yb, bb) {
        let {
          kind: Wy,
          offset: Uy,
          stride: hy,
          components: fy,
          glType: Zy,
          isNormalized: cb
        } = bb;
        const Py = this.Pf.xh();
        return new((0, Iy.b)().VertexBuffer)(Py, yb, Wy, !1, void 0, hy, void 0, Uy, fy, Zy, cb, !0, void 0, !0)
      }
      load(yb, bb, Wy) {
        const Uy = (0, xb.i)(Wy),
          hy = yb => {
            Uy || (Wy._delayInfo = Wy._delayInfo || [], -1 === Wy._delayInfo.indexOf(yb) && Wy._delayInfo.push(yb))
          },
          fy = bb.draco;
        if (fy) {
          for (const yb in fy.attributeIds) hy(yb);
          let Zy = this.dracoGeometry.get(fy.bufferView.index);
          return Zy || (Zy = this.viewBytes(fy.bufferView).then((async () => {
            let hy;
            try {
              hy = await Ry(bb, this.decode)
            } catch (Py) {
              throw new Jy.i(`${yb}: ${Py instanceof Error?Py.message:String(Py)}`)
            }
            const fy = uy(bb, hy);
            if (Uy) return fy;
            const Zy = dy(bb.position),
              cb = new((0, Iy.b)().MirroredGeometry)(Wy.name, this.Pf);
            Zy && (cb._boundingInfo = Zy, cb.useBoundingInfoFromGeometry = !0), fy.indexData && cb.setIndices(fy.indexData);
            for (const yb of fy.vertexAttributes) cb.setVerticesBuffer(this.layoutVertexBuffer(yb.data, yb), fy.vertexCount);
            return cb.link(fy), cb
          })), this.dracoGeometry.set(fy.bufferView.index, Zy)), Zy
        }
        const Zy = [],
          cb = Xy(bb);
        if (Uy) return Wy.isUnIndexed = !cb.indexData, Wy.hasVertexAlpha = (0, Ay.g)(bb), Promise.resolve(cb);
        const Py = new((0, Iy.b)().MirroredGeometry)(Wy.name, this.Pf),
          {
            indexData: oy
          } = cb;
        oy ? Zy.push(this.viewBytes(bb.indices.bufferView).then((() => {
          Py.setIndices(oy)
        }))) : Wy.isUnIndexed = !0;
        for (const [By, {
            kind: Ky,
            accessor: ey
          }] of bb.attributes.entries()) hy(Ky), Zy.push(this.vertexBuffer(ey, cb.vertexAttributes[By]).then((yb => {
          if ("position" === yb.getKind()) {
            const yb = dy(ey);
            yb && (Py._boundingInfo = yb, Py.useBoundingInfoFromGeometry = !0)
          }
          Py.setVerticesBuffer(yb, cb.vertexCount)
        })));
        return (0, Ay.g)(bb) && (Wy.hasVertexAlpha = !0), Promise.all(Zy).then((() => (Py.link(cb), Py)))
      }
    }
    var Wb, Ub = Wy(35959),
      hb = Wy(35856),
      fb = Wy(36557),
      Zb = Wy(35912),
      cW = Wy(35943),
      Pb = Wy(2234),
      ob = Wy(35931);

    function Bb(yb, bb) {
      yb.metadata = yb.metadata || {};
      const Wy = yb._internalMetadata = yb._internalMetadata || {},
        Uy = Wy.jBy = Wy.jBy || {};
      (Uy.pointers = Uy.pointers || []).push(bb)
    }

    function Kb(yb, bb) {
      if (bb && Object.keys(bb).length > 0) {
        const Wy = yb.metadata = yb.metadata || {};
        (Wy.jBy = Wy.jBy || {}).extras = bb
      }
    }

    function eb(yb, bb) {
      bb.position = yb.translation ? hb.dU.FromArray(yb.translation) : hb.dU.Zero(), bb.rotationQuaternion = yb.rotation ? hb.Quaternion.FromArray(yb.rotation) : hb.Quaternion.Identity(), bb.vZ = yb.scale ? hb.dU.FromArray(yb.scale) : hb.dU.One()
    }
    class qW {
      constructor(yb, bb) {
        if (this.Pf = yb, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, bb) {
          const bb = yb.xh(),
            Wy = yb.Nby.add((() => {
              this.dispose()
            })),
            Uy = bb.onContextRestoredObservable.add((() => {
              for (const yb of [...this.geometries, ...this.meshes, ...this.textures]) yb._rebuild()
            }));
          this.release = () => {
            yb.Nby.remove(Wy), bb.onContextRestoredObservable.remove(Uy)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const yb of this.meshes) this.Pf.yKy(yb);
          for (const yb of this.materials) this.Pf.addMaterial(yb);
          for (const yb of this.geometries) this.Pf.addGeometry(yb);
          for (const yb of this.transformNodes) this.Pf.addTransformNode(yb);
          for (const yb of this.textures) this.Pf.addTexture(yb)
        }
      }
      dispose() {
        var yb;
        for (const bb of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const yb of bb.slice()) yb.dispose();
          bb.length = 0
        }
        null === (yb = this.release) || void 0 === yb || yb.call(this), this.release = null
      }
    }
    class sb {
      constructor(yb, bb, Wy, Uy, hy, fy, Zy) {
        this.asset = yb, this.Pf = bb, this.tree = Wy, this.geometryData = hy, this.materials = fy, this.lite = Zy, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = Uy ? Wy : null
      }
      create(yb) {
        if (this.lite) return yb();
        const bb = this.Pf;
        bb._blockEntityCollection = !!this.container;
        try {
          const bb = yb();
          return this.container && (bb._parentContainer = this.container), bb
        } finally {
          bb._blockEntityCollection = !1
        }
      }
      node(yb, bb) {
        return this.create((() => this.lite ? bb ? (0, fb.d)(this.lite, yb) : (0, fb.q)(this.lite, yb) : bb ? new((0, Iy.b)().Mesh)(yb, this.Pf) : new((0, Iy.b)().TransformNode)(yb, this.Pf)))
      }
      async load() {
        var yb;
        this.asset.model.json.nodes && this.createRoot();
        const bb = this.lite ? null : this.Pf,
          Wy = null !== (yb = null === bb || void 0 === bb ? void 0 : bb.blockMaterialDirtyMechanism) && void 0 !== yb && yb;
        let Uy;
        bb && (bb.blockMaterialDirtyMechanism = !0);
        try {
          Uy = this.loadScene()
        } finally {
          null === bb || void 0 === bb || bb._forceBlockMaterialDirtyMechanism(Wy)
        }
        await Uy;
        const {
          root: hy,
          tree: fy
        } = this;
        hy && (hy.dJ(!0), fy.meshes.push(hy), fy.rootNodes.push(hy));
        for (const cb of this.asset.model.nodes) {
          const yb = this.nodeObjects.get(cb.index);
          yb && ["TransformNode", "LiteNode"].includes(yb.getClassName()) && fy.transformNodes.push(yb);
          for (const bb of null !== (Zy = this.nodePrimitives.get(cb.index)) && void 0 !== Zy ? Zy : []) {
            var Zy;
            fy.meshes.push(bb);
            const yb = bb.geometry;
            yb && !fy.geometries.includes(yb) && fy.geometries.push(yb)
          }
        }
      }
      createRoot() {
        const yb = this.node("__root__", !0);
        this.root = yb, yb.dJ(!1), this.Pf.useRightHandedSystem || eb(Fy, yb)
      }
      loadScene() {
        const yb = [];
        for (const bb of this.asset.model.rootNodes) yb.push(this.loadNode(this.asset.model.nodes[bb], (yb => {
          yb.parent = this.root
        })));
        return yb.push(Promise.resolve()), Promise.all(yb).then((() => {}))
      }
      loadNode(yb, bb) {
        const Wy = `/nodes/${yb.index}`,
          Uy = [],
          hy = hy => {
            if (Bb(hy, Wy), eb(yb, hy), yb.hasCamera && !this.Pf.useRightHandedSystem) {
              const {
                vZ: yb
              } = hy;
              yb.set(-1, yb.y, yb.z)
            }
            for (const bb of yb.children) Uy.push(this.loadNode(this.asset.model.nodes[bb], (yb => {
              yb.parent = hy
            })));
            (Wy => {
              Kb(Wy, yb.extras), bb(Wy)
            })(hy)
          };
        if (null === yb.mesh) {
          const bb = this.node(ab(yb), !1);
          this.nodeObjects.set(yb.index, bb), hy(bb)
        } else {
          const bb = this.asset.model.meshes[yb.mesh];
          Uy.push(this.loadMesh(`/meshes/${bb.index}`, yb, bb, hy))
        }
        return Promise.all(Uy).then((() => {
          for (const Wy of null !== (bb = this.nodePrimitives.get(yb.index)) && void 0 !== bb ? bb : []) {
            var bb;
            yW(Wy)
          }
          return this.nodeObjects.get(yb.index)
        }))
      }
      loadMesh(yb, bb, Wy, Uy) {
        const hy = [],
          fy = ab(bb);
        if (1 === Wy.primitives.length) {
          const Uy = Wy.primitives[0];
          hy.push(this.loadPrimitive(`${yb}/primitives/${Uy.index}`, fy, Uy, (yb => {
            this.nodeObjects.set(bb.index, yb), this.nodePrimitives.set(bb.index, [yb])
          })))
        } else {
          const Uy = this.node(fy, !1);
          this.nodeObjects.set(bb.index, Uy);
          const Zy = [];
          this.nodePrimitives.set(bb.index, Zy);
          for (const bb of Wy.primitives) hy.push(this.loadPrimitive(`${yb}/primitives/${bb.index}`, `${fy}_primitive${bb.index}`, bb, (yb => {
            yb.parent = Uy, Zy.push(yb)
          })))
        }
        const Zy = this.nodeObjects.get(bb.index);
        return Uy(Zy), Promise.all(hy).then((() => Zy))
      }
      loadPrimitive(yb, bb, Wy, Uy) {
        const hy = [],
          fy = this.node(bb, !0);
        if (fy.sideOrientation = this.Pf.useRightHandedSystem ? Zb.c.CounterClockWiseSideOrientation : Zb.c.ClockWiseSideOrientation, hy.push(this.geometryData.load(yb, Wy, fy).then((yb => {
            if ((0, xb.i)(fy)) {
              var bb, Wy;
              const Uy = yb;
              fy.replaceModel(Uy, Int32Array.of(0, null !== (bb = null === (Wy = Uy.indexData) || void 0 === Wy ? void 0 : Wy.length) && void 0 !== bb ? bb : Uy.vertexCount, 0, Uy.vertexCount))
            } else this.create((() => (yb.applyToMesh(fy), yb)))
          }))), this.materials) {
          const yb = 0 === Wy.mode ? Zb.c.PointListDrawMode : Zb.c.TriangleFillMode,
            bb = null === Wy.material ? null : this.asset.model.materials[Wy.material];
          hy.push(this.loadMaterial(bb, yb, (yb => {
            fy.material = yb
          })))
        }
        return Bb(fy, yb), Uy(fy), Promise.all(hy).then((() => fy))
      }
      loadMaterial(yb, bb, Wy) {
        var Uy;
        const hy = `${null!==(Uy=null===yb||void 0===yb?void 0:yb.index)&&void 0!==Uy?Uy:"default"}:${bb}`;
        let fy = this.materialData.get(hy);
        return fy || (fy = this.createMaterial(yb, bb), this.materialData.set(hy, fy)), Wy(fy.material), fy.promise
      }
      createMaterial(yb, bb) {
        const Wy = yb ? yb.name || `material${yb.index}` : "__GLTFLoader._default",
          {
            style: Uy,
            unlit: hy
          } = this.materials;
        let fy;
        const Zy = this.create((() => {
          const Zy = (0, ob.c)({
            name: Wy,
            Pf: this.Pf,
            sets: {
              ...(0, Ay.c)(this.asset, yb, Uy, hy),
              fillMode: bb
            },
            unrendered: !0
          });
          return fy = Zy.model, Zy.mirror
        }));
        let cb = Promise.resolve();
        if (yb) {
          const bb = `/materials/${yb.index}`,
            Uy = fy.diffuseTexture;
          if (Uy && !Uy.mirror) cb = new Promise((yb => setTimeout(yb)));
          else if (Uy) {
            const hy = Uy.mirror;
            hy._parentContainer = this.container, hy.name = `${Wy} (Base Color)`, Bb(hy, `${bb}${yb.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(hy), cb = (0, cW.x)(Uy)
          }
          Kb(Zy, yb.extras), Bb(Zy, bb)
        }
        return this.tree.materials.push(Zy), {
          material: Zy,
          promise: cb
        }
      }
    }

    function Sb() {
      Ub.f.dracoDecodes = sy.decodes, Ub.f.dracoWorkersStarted = sy.workersStarted, Ub.f.dracoMostWorkers = sy.mostWorkers
    }
    async function Eb(yb, bb, Wy, hy, fy) {
      try {
        return await async function(yb, bb, Wy, hy, fy, Zy) {
          var cb;
          let Py;
          const oy = null === (cb = (0, Pb.g)()) || void 0 === cb ? void 0 : cb.Ch,
            By = null !== oy && void 0 !== oy && oy.Th && bb === oy.kWy() ? oy : null,
            Ky = fy && !By;
          return await zb(yb, bb, Wy, hy, Uy.e, (yb => (Py = new qW(bb, Ky), new sb(yb, bb, Py, Ky, new bW(bb, hy), Zy, By).load())), !fy), Py
        }(yb, bb, Wy, Cy, hy, fy)
      } finally {
        Sb()
      }
    }
    async function lb(yb, bb, Wy, hy) {
      try {
        return await zb(yb, bb, Wy, Cy, Uy.e, (yb => hy(yb, new bW(bb, Cy))))
      } finally {
        Sb()
      }
    }
    Wb = hy.e, oy || (oy = {
      scriptUrl: new URL(Wb.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Wb.wasmBinaryUrl, location.href).href
    })
  },
  39937: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy
    });
    var Uy = Wy(139),
      hy = Wy(1057);

    function fy(yb) {
      return (0, Uy.d)() ? `https://${hy.b.discordDomain}/${yb.href}` : yb.href
    }
    const Zy = {
      scriptUrl: fy(new Wy.U(Wy(39946))),
      wasmBinaryUrl: fy(new Wy.U(Wy(39952)))
    }
  },
  35092: yb => {
    yb.exports = function(yb, bb, Wy, Uy) {
      var hy = self || window;
      try {
        try {
          var fy;
          try {
            fy = new hy.Blob([yb])
          } catch (oy) {
            (fy = new(hy.BlobBuilder || hy.WebKitBlobBuilder || hy.MozBlobBuilder || hy.MSBlobBuilder)).append(yb), fy = fy.getBlob()
          }
          var Zy = hy.URL || hy.webkitURL,
            cb = Zy.createObjectURL(fy),
            Py = new hy[bb](cb, Wy);
          return Zy.revokeObjectURL(cb), Py
        } catch (oy) {
          return new hy[bb]("data:application/javascript,".concat(encodeURIComponent(yb)), Wy)
        }
      } catch (oy) {
        if (!Uy) throw Error("Inline worker is not supported");
        return new hy[bb](Uy, Wy)
      }
    }
  },
  39952: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  39946: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);
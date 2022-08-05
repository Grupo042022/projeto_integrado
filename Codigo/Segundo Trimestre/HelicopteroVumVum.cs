using System.Collections;
using System.Collections.Generic;
using UnityEngine;



public class HelicopteroVumVum : MonoBehaviour
{

    public float Speed;
public float JumpForce;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
       Move(); 
    }

    void Move()
    {
        Vector3 movement = new Vector3(Input.GetAxis("Horizontal"), 0f, 0f);
        transform.position += movement * Time.deltaTime * Speed;
    }
}
